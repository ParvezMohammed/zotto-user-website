import React from 'react';

const PolicySection = ({ title, points }) => {
  return (
    <div className="bg-white py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-black">
        <h2 className="font-inter font-medium text-[24px] sm:text-[28px] md:text-[32px] mb-4 pb-2 inline-block border-b-2 border-black">
          {title}
        </h2>

        <ul className="list-decimal pl-5 sm:pl-7 space-y-2 sm:space-y-3 text-justify font-poppins text-[14px] sm:text-[16px] leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicySection;
