'use client';

import { IoIosArrowUp } from 'react-icons/io';

export default function FooterBottom() {
  return (
    <div id="footer-bottom" className="bg-gray-900 text-white py-4">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p className="text-sm text-center md:text-left">
              Designed and Developed by{' '}
              <a
                href="http://www.gstadeveloper.com"
                className="text-yellow-400 hover:underline"
              >
                GstaDeveloper
              </a>
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
            aria-label="Back to top"
          >
            <IoIosArrowUp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
