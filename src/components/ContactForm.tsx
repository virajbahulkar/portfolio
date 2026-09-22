import { useState } from 'react';

import { SectionHeader } from './SectionHeader';

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setErrorMessage('');
    setShowToast(false);

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

      const payload = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!res.ok || !payload?.success) {
        throw new Error(
          payload?.error ||
            'Message could not be sent right now. Please try again in a moment.'
        );
      }

      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 3000);
    } catch (error: unknown) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Message could not be sent right now. Please try again in a moment.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-w-0 flex-col">
      {showToast && (
        <div className="absolute inset-x-4 top-4 z-50 rounded bg-green-600 px-4 py-2 text-sm text-white shadow-lg transition-opacity duration-300 sm:left-auto sm:right-4 sm:max-w-sm">
          Thank you! Your message has been sent.
        </div>
      )}
      {/* Top */}
      <div className="mb-4 space-y-2 ">
        <SectionHeader
          title=""
          highlightedText="Let’s Connect"
          size="text-2xl font-semibold"
        />
        <p className="text-sm leading-relaxed">
          Interested in discussing a role, a project or something technical?
          Feel free to send me a message. I’ll get back to you when I can.
        </p>
      </div>

      {/* Bottom (Form) */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          required
          className="w-full min-w-0 rounded-md border border-base-300 px-4 py-2 text-base placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          required
          className="w-full min-w-0 rounded-md border border-base-300 px-4 py-2 text-base placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
        />
        <textarea
          name="message"
          placeholder="Message"
          aria-label="Message"
          rows={4}
          required
          className="w-full min-w-0 resize-y rounded-md border border-base-300 px-4 py-2 text-base placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center gap-2 self-stretch rounded-full px-6 py-2 text-sm font-medium transition-all sm:w-auto sm:self-end ${
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
        {errorMessage && (
          <p className="rounded-md border border-error/40 bg-error/10 px-3 py-2 text-sm text-error">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export { ContactForm };
