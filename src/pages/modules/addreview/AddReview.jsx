import React, { useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the review to your backend or API
    setSubmitted(true);
    // Optionally clear the form:
    // setRating(0); setReview('');
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center px-2 py-4">
        <h2 className="text-lg font-semibold text-green-600 mb-4">Thank you for your review!</h2>
      </div>
    );
  }

  return (
    <form
      className="bg-white min-h-screen px-2 py-4 flex flex-col items-center w-full"
      onSubmit={handleSubmit}
    >
      {/* Add a Review Title with underline */}
      <h1 className="text-lg sm:text-xl font-semibold text-black mb-4 pb-2 border-b-2 border-black inline-block w-full text-center">
        Add a review
      </h1>

      {/* Product Image and Name */}
      <div className="flex flex-col items-center mb-4 w-full">
        <img src="/images/whisper.png" alt="Product" className="w-28 h-28 object-contain mb-2" />
        <div className="text-base font-medium text-gray-800 text-center">Softcare Sanitary Pads</div>
      </div>

      {/* Review box with background */}
      <div className="w-full max-w-md bg-[#EEEEEE] rounded-2xl border border-gray-300 p-3 sm:p-6 mb-4">
        {/* Rate the Product */}
        <h2 className="text-base sm:text-lg font-semibold text-black mb-3">Rate the product</h2>

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
        <h3 className="text-base sm:text-lg text-black mb-2">Write a Review</h3>

        {/* Textarea */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review about product"
          className="w-full h-28 sm:h-32 bg-white rounded-xl p-3 sm:p-4 text-black outline-none resize-none text-sm sm:text-base"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full max-w-md bg-[#FF6584] text-white px-6 py-2 rounded-md text-base font-medium hover:bg-pink-600 transition mb-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddReview;
