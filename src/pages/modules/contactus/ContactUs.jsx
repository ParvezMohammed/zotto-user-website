import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white pt-8 mt-16 min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-[130px]">
      <h2 className="font-inter font-[500] text-[24px] sm:text-[32px] text-[#262626] mb-4 pb-2 sm:border-b-2 sm:border-black inline-block">
        Contact Us
      </h2>

      <p className="text-[16px] font-[500] text-black mb-6">
        Contact us on our toll-free number: <span className="text-[#ff6584]">1800 236 458 326</span>
      </p>

      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-4">
        <h3 className="font-poppins font-[400] text-[20px] text-black mb-2">
          Need further assistance?
        </h3>
        <p className="font-poppins font-[400] text-[16px] text-gray-700 mb-4">
          We are here to help you!
        </p>

        <button className="flex items-center justify-center bg-white border-1 border-[#ff6584] text-[#ff6584] py-2 px-6 rounded-lg hover:bg-[#ff6584] hover:text-white transition-all">
          <FaPhoneAlt className="mr-2 text-[18px]" />
          <span>Call Us</span>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
