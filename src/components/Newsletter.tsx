import { SectionHeader } from './SectionHeader';

const Newsletter = () => (
  <div className="mt-12 flex flex-col items-center justify-between gap-8 px-4 py-6 sm:flex-row sm:p-8 ">
    {/* Left Section */}
    <div className="space-y-2 sm:w-1/2">
      <SectionHeader
        title=""
        highlightedText="Get Exclusive Updates"
        size="text-2xl font-semibold"
      />
      <p className="text-sm leading-relaxed ">
        Get the latest updates on web development, technology trends, and
        industry news delivered to your inbox. Join our community today!
      </p>
    </div>

    {/* Right Section */}
    <form
      name="subscribe"
      method="POST"
      className="flex w-full items-center rounded-full bg-gray-100 px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 sm:w-1/2"
      data-netlify="true"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="placeholder: grow bg-transparent text-sm  focus:outline-none"
      />
      <button
        type="submit"
        className="ml-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export { Newsletter };
