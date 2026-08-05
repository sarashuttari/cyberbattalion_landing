import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, reason, message } = body;

  if (!name || !email || !reason || !message) {
    return Response.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Contact form: GMAIL_USER/GMAIL_APP_PASSWORD are not configured."
    );
    return Response.json(
      { ok: false, error: "Email delivery isn't configured on the server yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Cyber Battalion Website" <${user}>`,
      to: user,
      replyTo: email,
      subject: `[${reason}] Query from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Reason: ${reason}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json(
      {
        ok: false,
        error: "Failed to send. Please try again or email us directly.",
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
