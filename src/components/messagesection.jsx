import React from 'react';

const PolicySection = ({ title, points }) => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading with underline just below the text */}
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 pb-2 inline-block border-b-2 border-black">
          {title}
        </h2>

        {/* Numbered Points */}
        <ul className="list-decimal pl-4 sm:pl-6 space-y-3 text-gray-700 text-justify text-sm sm:text-base lg:text-lg leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicySection;
