import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { email, message, name } = JSON.parse(event.body || '{}');

  if (!email || !message) {
    return {
      statusCode: 400,
      body: 'Missing email or message',
    };
  }

  try {
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: 'Your Company Name',
          email: 'you@yourdomain.com',
        },
        to: [{ email }],
        templateId: 42, // 🔁 Replace with your actual template ID
        params: {
          name,
          message,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Template email sent successfully' }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

export { handler };
