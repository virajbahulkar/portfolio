import { useState } from 'react';

import { SectionHeader } from './SectionHeader';

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const res = await fetch('/.netlify/functions/sendFormEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-12 flex flex-col items-center justify-between gap-8 px-4 py-6 sm:flex-row sm:p-8">
      {showToast && (
        <div className="absolute right-4 top-4 z-50 rounded bg-green-600 px-4 py-2 text-sm text-white shadow-lg transition-opacity duration-300">
          Thank you! Your message has been sent.
        </div>
      )}

      {/* Left */}
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

      {/* Right (Form) */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 sm:w-1/2"
      >
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
          disabled={loading}
          className={`flex items-center justify-center gap-2 self-end rounded-full px-6 py-2 text-sm font-medium transition-all ${
            loading
              ? 'cursor-not-allowed bg-primary/50 opacity-70'
              : 'bg-primary hover:scale-105 hover:bg-primary/80'
          } text-primary-content`}
        >
          {loading && (
            <svg
              className="size-4 animate-spin text-primary-content"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
