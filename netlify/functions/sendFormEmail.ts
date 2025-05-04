import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    // Send to yourself
    const result = await resend.emails.send({
      from: 'Contact Form <hello@virajbahulkar.me>',
      to: 'hello@virajbahulkar.me',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      reply_to: email, // ✅ you can click "Reply" to respond directly
    });

    // Optional: Auto-reply to the user
    await resend.emails.send({
      from: 'Viraj Bahulkar <hello@virajbahulkar.me>',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to me. I've received your message and will get back to you as soon as possible.</p>
        <p>Meanwhile, feel free to explore <a href="https://virajbahulkar.me">virajbahulkar.me</a>.</p>
        <p>Best regards,<br/>Viraj Bahulkar</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: result }),
    };
  } catch (error: any) {
    console.error('Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
