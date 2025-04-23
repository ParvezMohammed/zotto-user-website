import React from 'react';

const PolicySection = ({ title, points }) => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-4xl mx-auto font-inter text-black">
        {/* Heading with Inter, weight 500, size 32px */}
        <h2 className="font-inter font-[500] text-[32px] mb-4 pb-2 inline-block border-b-2 border-black">
          {title}
        </h2>

        {/* Numbered Points in Inter, color #000000 */}
        <ul className="list-decimal pl-4 sm:pl-6 space-y-3 text-justify font-poppins text-[16px] leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicySection;
