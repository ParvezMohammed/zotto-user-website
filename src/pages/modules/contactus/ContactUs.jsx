import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title with black underline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 pb-2 inline-block border-b-2 border-black">
          Contact Us
        </h2>

        {/* Message with toll free number in pink */}
        <p className="text-sm sm:text-base text-black mb-6">
          Contact us on our toll-free number: <span className="text-pink-500 font-medium">1800 236 458 326</span>
        </p>

        {/* Main message box with curved corners */}
        <div className="bg-white rounded-2xl border border-gray-300 p-4 sm:p-6 mt-4">
          <h3 className="text-lg sm:text-2xl font-bold text-black mb-2">
            Need further assistance?
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            We are here to help you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
