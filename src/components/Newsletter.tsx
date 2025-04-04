import { GradientText } from 'astro-boilerplate-components';
import { SectionHeader } from './SectionHeader';

const Newsletter = () => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12 px-4 py-6 sm:px-8 sm:py-8 bg-white">
    {/* Left Section */}
    <div className="sm:w-1/2 space-y-2">
      <SectionHeader
        title=""
        highlightedText="Get Exclusive Updates"
        size="text-2xl font-semibold"
      />
      <p className="text-sm text-gray-700 leading-relaxed">
        Get the latest updates on web development, technology trends, and industry news delivered to your inbox. Join our community today!
      </p>
    </div>

    {/* Right Section */}
    <form
      name="subscribe"
      method="POST"
      className="flex items-center w-full sm:w-1/2 rounded-full bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all"
      data-netlify="true"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="flex-grow bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-500"
      />
      <button
        type="submit"
        className="ml-4 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export { Newsletter };
