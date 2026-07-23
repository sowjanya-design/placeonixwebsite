const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Legacy flat course URLs -> new /courses/<category>/<slug>.html structure.
// Mirrors the "redirects" array in vercel.json so non-Vercel hosts (and local
// dev) get the same 301s instead of a 404.
const COURSE_REDIRECTS = {
  "/courses/sap-btp-training.html": "/courses/sap/sap-btp.html",
  "/courses/sap-cpi-training.html": "/courses/sap/sap-cpi.html",
  "/courses/sap-capm-training.html": "/courses/sap/sap-capm.html",
  "/courses/sap-rap-training.html": "/courses/sap/sap-rap.html",
  "/courses/sap-ui5-fiori-training.html": "/courses/sap/sap-ui5-fiori.html",
  "/courses/sap-abap-training.html": "/courses/sap/sap-abap.html",
  "/courses/sap-fico-training.html": "/courses/sap/sap-fico.html",
  "/courses/sap-mm-training.html": "/courses/sap/sap-mm.html",
  "/courses/sap-sd-training.html": "/courses/sap/sap-sd.html",
  "/courses/sap-basis-training.html": "/courses/sap/sap-basis.html",
  "/courses/data-science-training.html": "/courses/technology/data-science.html",
  "/courses/generative-ai-training.html": "/courses/technology/generative-ai.html",
  "/courses/cloud-computing-training.html": "/courses/technology/cloud-computing.html",
  "/courses/full-stack-training.html": "/courses/technology/full-stack.html",
  "/courses/java-backend-training.html": "/courses/technology/java-backend.html",
  "/courses/cyber-security-training.html": "/courses/technology/cyber-security.html",
  "/courses/ui-ux-design-training.html": "/courses/technology/ui-ux-design.html",
  "/courses/sap-integration-expert-combo.html": "/courses/combo/sap-integration-expert.html",
  "/courses/ai-data-science-combo.html": "/courses/combo/ai-data-science.html",
  "/courses/cloud-dev-bundle-combo.html": "/courses/combo/cloud-dev-bundle.html",
  "/courses/sap-functional-analyst-combo.html": "/courses/combo/sap-functional-analyst.html",
  "/courses/sap-full-stack-program-combo.html": "/courses/combo/sap-full-stack-program.html"
};

app.use((req, res, next) => {
  const destination = COURSE_REDIRECTS[req.path];
  if (destination) {
    return res.redirect(301, destination);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

function required(value) {
  return typeof value === "string" && value.trim().length > 0;
}

app.post("/api/applications", async (req, res) => {
  const {
    fullName,
    email,
    phone,
    program,
    message,
    qualification,
    graduationYear,
    location
  } = req.body;

  if (!required(fullName) || !required(email) || !required(phone) || !required(program)) {
    return res.status(400).json({
      success: false,
      message: "Name, email, phone, and program are required."
    });
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
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
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Placeonix Website" <${process.env.SMTP_USER}>`,
      to: "enquiry@placeonix.com, support@placeonix.com",
      subject: `New Application - ${program}`,
      html: adminHtml
    });

    await transporter.sendMail({
      from: `"Placeonix" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Application received - Placeonix",
      html: studentHtml
    });

    return res.json({
      success: true,
      message: "Application submitted successfully."
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send application email."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Placeonix server running on port ${PORT}`);
});
