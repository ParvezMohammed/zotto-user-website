import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title: Inter, 500, 32px, #262626 */}
        <h2 className="font-inter font-[500] text-[32px] text-[#262626] mb-4 pb-2 inline-block border-b-2 border-black">
          Contact Us
        </h2>

        {/* Toll-free text: 16px, 500; number: #ff6584 */}
        <p className="text-[16px] font-[500] text-black mb-6">
          Contact us on our toll-free number: <span className="text-[#ff6584]">1800 236 458 326</span>
        </p>

        {/* Assistance box */}
        <div className="bg-white rounded-2xl border border-gray-300 p-4 sm:p-6 mt-4">
          {/* Need further assistance?: Poppins, 400, 20px */}
          <h3 className="font-poppins font-[400] text-[20px] text-black mb-2">
            Need further assistance?
          </h3>
          {/* We are here to help you!: Poppins, 400, 16px */}
          <p className="font-poppins font-[400] text-[16px] text-gray-700">
            We are here to help you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
