import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-[130px]">
      <h2 className="font-inter font-[500] text-[32px] text-[#262626] mb-4 pb-2 inline-block border-b-2 border-black">
        Contact Us
      </h2>

      <p className="text-[16px] font-[500] text-black mb-6">
        Contact us on our toll-free number: <span className="text-[#ff6584]">1800 236 458 326</span>
      </p>

      <div className="bg-white rounded-2xl border border-gray-300 p-4 sm:p-6 mt-4">
        <h3 className="font-poppins font-[400] text-[20px] text-black mb-2">
          Need further assistance?
        </h3>
        <p className="font-poppins font-[400] text-[16px] text-gray-700">
          We are here to help you!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
