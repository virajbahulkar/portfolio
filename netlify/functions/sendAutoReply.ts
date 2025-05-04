import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body || '{}');

  try {
    await resend.emails.send({
      from: 'Viraj Bahulkar <hell@virajbahulkar.me>',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to me. I've received your message and will get back to you as soon as possible.</p>
        <p>Meanwhile, feel free to explore <a href="https://virajbahulkar.me">virajbahulkar.me</a>.</p>
        <p>Best regards,<br/>Viraj Bahulkar</p>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};

export { handler };
