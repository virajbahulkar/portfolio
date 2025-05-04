import { useState } from 'react';

import { SectionHeader } from './SectionHeader';

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // Send to Brevo webhook for auto-reply (replace with your real URL)
      await fetch('/.netlify/functions/sendAutoReply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          name: formData.get('name'),
          message: formData.get('message'),
        }),
      });

      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="relative mt-12 flex flex-col items-center justify-between gap-8 px-4 py-6 sm:flex-row sm:p-8">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute right-4 top-4 z-50 rounded bg-green-600 px-4 py-2 text-sm text-white shadow-lg transition-opacity duration-300">
          Thank you! Your message has been sent.
        </div>
      )}

      {/* Left Section */}
      <div className="space-y-2 sm:w-1/2">
        <SectionHeader
          title=""
          highlightedText="Get in Touch"
          size="text-2xl font-semibold"
        />
        <p className="text-sm leading-relaxed">
          Have a question, idea, or just want to say hello? Reach out and we’ll
          get back to you as soon as possible!
        </p>
      </div>

      {/* Right Section (Form) */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 sm:w-1/2"
      >
        {/* Netlify Hidden Inputs */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-md border border-base-300 px-4 py-2 text-sm placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-md border border-base-300 px-4 py-2 text-sm placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          required
          className="rounded-md border border-base-300 px-4 py-2 text-sm placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>

        <button
          type="submit"
          className="self-end rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-content transition-all hover:scale-105 hover:bg-primary/80"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
