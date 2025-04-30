import React, { useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="bg-white min-h-screen pt-8 mt-16 py-6 px-4 sm:px-6 md:px-10 lg:px-[130px]">
{/* Product Image and Name — ONLY for Mobile */}
{/* Title Wrapper */}
<div className="sm:text-left text-center">
  <h1 className="text-xl sm:text-2xl font-semibold text-black mb-4 pb-0 sm:pb-2 border-0 sm:border-b-2 sm:border-black inline-block">
    Add Review
  </h1>
</div>

<div className="block sm:hidden flex flex-col items-center mb-6">
  <img
    src="./images/orders4.png"
    alt="Product"
    className="w-32 h-32 object-cover rounded-lg mb-2"
  />
  <h2 className="text-lg font-poppins text-black text-center">
    Softcare Sanitary Pads
  </h2>
</div>
    

      {/* Review box with background */}
      <div className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-4 sm:p-6">
        {/* Rate the Product */}
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">
          Rate the Product
        </h2>

        {/* Stars */}
        <div className="flex space-x-2 mb-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <IoMdStarOutline
              key={star}
              className={`cursor-pointer text-xl sm:text-2xl ${(hover || rating) >= star ? 'text-yellow-400' : 'text-gray-400'}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>

        {/* Write a Review Label */}
        <h3 className="text-lg text-black mb-2">Write a Review</h3>

        {/* Textarea */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review about the product"
          className="w-full h-32 bg-white rounded-xl p-3 sm:p-4 text-black outline-none resize-none text-sm sm:text-base"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <button className="bg-[#FF6584] text-white px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-pink-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReview;
