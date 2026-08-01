import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    fullName,
    email,
    phone,
    program,
    message,
    qualification,
    graduationYear,
    location,
    website,
    intent,
  } = body;

  if (website) {
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  }

  if (!fullName || !email || !phone || !program) {
    return NextResponse.json(
      {
        success: false,
        message: "Name, email, phone, and program are required.",
      },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const adminHtml = `
    <h2>New Placeonix Application</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Program:</strong> ${program}</p>
    <p><strong>Qualification:</strong> ${qualification || "-"}</p>
    <p><strong>Graduation Year:</strong> ${graduationYear || "-"}</p>
    <p><strong>Location:</strong> ${location || "-"}</p>
    <p><strong>Message:</strong> ${message || "-"}</p>
    <p><strong>Submitted At:</strong> ${submittedAt}</p>
  `;

  const studentHtml = `
    <h2>Thank you for applying to Placeonix</h2>
    <p>Hi ${fullName},</p>
    <p>We have received your application for <strong>${program}</strong>.</p>
    <p>Our team will contact you shortly.</p>
    <p><strong>Contact:</strong> +91 9949494020, +91 9121759191</p>
    <p>Placeonix<br/>Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District, Hyderabad, Telangana-500032</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Placeonix Website" <${process.env.SMTP_USER}>`,
      to:
        process.env.ADMIN_EMAILS ||
        "enquiry@placeonix.com, support@placeonix.com",
      subject: intent === "demo" ? "Interested for Demo" : "Interested for Course",
      html: adminHtml,
    });

    await transporter.sendMail({
      from: `"Placeonix" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Application received - Placeonix",
      html: studentHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send application email." },
      { status: 500 },
    );
  }
}
