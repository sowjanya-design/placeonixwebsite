const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { fullName, email, phone, program, message } = req.body;

  if (!fullName || !email || !phone || !program) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Placeonix Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAILS,
      subject: `New Application - ${program}`,
      html: `
        <h2>New Application</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Program:</b> ${program}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `
    });

    await transporter.sendMail({
      from: `"Placeonix" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Application received - Placeonix",
      html: `
        <p>Hi ${fullName},</p>
        <p>We received your application for <b>${program}</b>.</p>
        <p>Our team will contact you shortly.</p>
        <p>Placeonix</p>
      `
    });

    return res.status(200).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email sending failed" });
  }
};
