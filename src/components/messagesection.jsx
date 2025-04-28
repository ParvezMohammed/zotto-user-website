import React from 'react';

const PolicySection = ({ title, points }) => {
  return (
    <div className="bg-white pt-2 pb-4 px-4 sm:px-6 md:px-10 lg:px-[130px]">
      <div className="w-full text-black">
        <h2 className="font-inter font-medium text-[22px] sm:text-[26px] md:text-[32px] mb-4 pb-2 inline-block border-b-2 border-black">
          {title}
        </h2>

        <ul className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-justify font-poppins text-[14px] sm:text-[16px] leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicySection;
