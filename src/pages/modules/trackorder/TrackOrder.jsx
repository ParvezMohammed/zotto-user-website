import React from 'react';

// Custom circle dot component
const CircleDot = () => (
  <div className="relative w-5 h-5">
    <div className="absolute inset-0 rounded-full bg-red-400"></div>
    <div className="absolute inset-1 rounded-full bg-red-400"></div>
    <div className="absolute inset-2 rounded-full bg-red-400"></div>
  </div>
);

export default function TrackOrder() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Track Order</h1>
        <div className="flex items-center">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
            S
          </div>
          <span className="text-2xl">⋮</span>
        </div>
      </div>

      {/* Product Card */}
      <div className="border border-gray-200 rounded-lg p-6 mb-8 flex">
        <div className='flex'>
        <div className="mr-8">
          <img src="./images/orders2.png" alt="Whisper Ultra Soft XL Sanitary Pads" className="w-48" />
        </div>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-1 mt-12 ml-22">Softcare Sanitary Pads</h2>
          <p className="text-gray-600 mb-4">15 Pads</p>
          <p className="font-medium">₹123.00</p>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-32 top-6 bottom-0 w-0.5 bg-red-300"></div>

        {/* Timeline Items */}
        <div className="mb-12 flex">
          <div className="w-32">
            <p className="font-medium">10 jan 2025</p>
            <p className="text-gray-500">10.00 AM</p>
          </div>
          <div className="**relative -ml-2.5 z-10**">
            <CircleDot />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Order Placed</h3>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="w-32">
            <p className="font-medium">12 jan 2025</p>
            <p className="text-gray-500">2.00 PM</p>
          </div>
          <div className="**relative -ml-2.5 z-10**">
            <CircleDot />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Out For Delivery</h3>
          </div>
        </div>

        <div className="flex">
          <div className="w-32">
            <p className="font-medium">12 jan 2025</p>
            <p className="text-gray-500">4.00 PM</p>
          </div>
          <div className="**relative -ml-2.5 z-10**">
            <CircleDot />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Delivered</h3>
          </div>
        </div>
      </div>
    </div>
  );
}