import React from 'react';
import { FaStar } from 'react-icons/fa';
import user1 from '../../../assets/images/user1.png'; // ✅ Static import
import user2 from '../../../assets/images/user2.png'; // ✅ Static import

const testimonialData = [
  {
    id: 1,
    name: 'Himani Raut',
    status: 'Satisfied Customer, Himani',
    text: 'Whisper Sanitary Pads provide exceptional comfort and reliable protection, ensuring you feel fresh and secure all day long.',
    image: user1
  },
  {
    id: 2,
    name: 'Nandini Nahata',
    status: 'Happy customer, Nandini',
    text: "I swear by Whisper Sanitary Pads. They're incredibly comfortable and provide the best protection!",
    image: user2
  },
  {
    id: 3,
    name: 'Kajal Patil',
    status: 'Happy customer, Kajal',
    text: "I swear by Whisper Sanitary Pads. They're incredibly comfortable and provide the best protection!",
    image: user2
  }
];
const Testimonials = () => {
  return (
    <div className="bg-white py-10 px-5  mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Customer Testimonials</h2>
      <p className="text-lg text-gray-600 mb-8">Read what our customers have to say</p>

      <div className="space-y-6">
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="p-6 border-b border-gray-200">
            <div className="flex space-x-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500 text-lg" />
              ))}
            </div>
            <p className="text-gray-800 text-base leading-relaxed mb-5">{testimonial.text}</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-base font-medium text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
