import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const resend = new Resend(config.RESEND_API_KEY);
  const body = await readBody(event);

  if (!body.email || !body.message) {
    return { status: false, error: "Faltan campos obligatorios." };
  }
  try {
    const data = await resend.emails.send({
      from: "Mi Portfolio <onboarding@resend.dev>",
      to: ["mt.fgucciardi@gmail.com"],
      subject: "Nuevo mensaje de tu portfolio",
      html: `
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${body.message}</p>
    `,
    });

    return { status: true, data };
  } catch {
    return { status: false, error: "Error enviando el correo." };
  }
});
