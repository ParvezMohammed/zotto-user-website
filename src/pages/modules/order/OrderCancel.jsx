import React, { useState } from 'react';

function OrderCancel() {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [text, setText] = useState('');

  const reasons = [
    "I want to change the Product",
    "Not available on the delivery time",
    "Price High",
    "I ordered wrong Product",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalReason = selectedReason === 'Other' ? customReason : selectedReason;
    console.log('Submitted Reason:', finalReason);
    // Handle your API or form submission here
  };

  return (
    <div className="flex justify-center mt-10 w-full">
      <form onSubmit={handleSubmit} className=" p-6 w-full rounded-lg ">
<div className='text-left'>        <h2 className="text-2xl font-semibold mb-6">Choose a Reason</h2>
</div>
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="radio"
              id={`reason-${index}`}
              name="reason"
              value={reason}
              checked={selectedReason === reason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`reason-${index}`} className="ml-3 text-gray-700">
              {reason}
            </label>
          </div>
        ))}

        {selectedReason === 'Other' && (
          <textarea
            placeholder="Write a Reason"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
          />
        )}
         <div className='w-full h-44 border border-grey-2 text-left pl-8 pr-8'>
      <input
        type="text"
        placeholder="Write a Reason.."
        value={text}
        onChange={(e) => setText(e.target.value)}
        
      />
       {text}
    </div>
        <div><button
          type="submit"
          className="mt-6 ml-6  gap-2 w-[204px] h-[66px] bg-pink-400 hover:bg-pink-500 text-white font-semibold  rounded-full transition-colors"
        >
          Submit
        </button></div>
      </form>
    </div>
  );
}

export default OrderCancel;
