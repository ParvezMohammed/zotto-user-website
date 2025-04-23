import React, { useState } from 'react';
import { IoMdStarOutline  } from 'react-icons/io';

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Outer Box with grey background */}
        <div
          className="bg-gray-100 rounded-2xl border border-gray-300 p-4 sm:p-6"
        >
          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">
            Rate the Product
          </h2>

          {/* Star Rating */}
          <div className="flex space-x-2 mb-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <IoMdStarOutline
                key={star}
                className={`cursor-pointer text-xl sm:text-2xl ${
                  (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-400'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>

          {/* Review Label */}
          <h3 className="text-lg text-black mb-2">Write a Review</h3>

          {/* Review Textarea */}
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review about the product"
            className="w-full h-32 bg-white rounded-xl p-3 sm:p-4 text-gray-700 outline-none resize-none text-sm sm:text-base"
          ></textarea>
        </div>

        {/* Submit Button - outside the box, right aligned */}
        <div className="flex justify-end mt-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-pink-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
