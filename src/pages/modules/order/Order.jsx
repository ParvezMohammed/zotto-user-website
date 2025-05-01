import React from 'react';
import { useNavigate } from 'react-router-dom';

import orders1 from '../../../assets/images/ordes1.png';
import orders2 from '../../../assets/images/orders2.png';
import orders3 from '../../../assets/images/orders3.png';
import orders4 from '../../../assets/images/orders4.png';

const orders = [
  {
    id: 1,
    productImg: orders1,
    productName: 'Softcare Sanitary Pads',
    quantity: '10 Pads',
    price: '₹123.00',
    orderDate: '10 Jan 2025',
    deliveryDate: '12 Jan 2025',
    delivered: true,
  },
  {
    id: 2,
    productImg: orders2,
    productName: 'Anytime Sanitary Pads',
    quantity: '10 Pads',
    price: '₹256.00',
    orderDate: '20 Mar 2025',
    deliveryDate: 'Not Delivered yet',
    delivered: false,
  },
  {
    id: 3,
    productImg: orders3,
    productName: 'Ladysoft Sanitary Pads',
    quantity: '8 Pads',
    price: '₹245.00',
    orderDate: '20 Mar 2025',
    deliveryDate: 'Not Delivered yet',
    delivered: false,
  },
  {
    id: 4,
    productImg: orders4,
    productName: 'Petals Sanitary Pads (Combo of 4)',
    quantity: 'Each 10 Pads',
    price: '₹1200.00',
    orderDate: '20 Mar 2025',
    deliveryDate: 'Not Delivered yet',
    delivered: false,
  }
];


const Orders = () => {
  const navigate = useNavigate();

  const handleViewDetails = (orderId) => {
    navigate(`/order-details/${orderId}`);
  };

  return (
    <div className="w-full px-4 mt-20 py-6 bg-white min-h-screen">
      <h2 className="text-lg font-semibold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-6">Delivery Product</h2>

      {/* Grid Container */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg p-4 flex flex-col items-center shadow-sm "
          >
            <div className='w-full bg-gray-200 rounded my-4 p-2'>
              <div className='flex gap-4 w-full flex justify-between px-4 '>
                <img
                src={order.productImg}
                alt={order.productName}
                className="w-30 h-30 object-contain mb-3 rounded-md"
              />
              <div className='py-4'>
                <p className='font-medium text-gray-800 text-base'>{order.productName}</p>
                <p className='font-medium text-gray-800 text-base'>{order.quantity}</p>
                <p className="text-xs text-gray-800 font-semibold mb-3">{order.price}</p>
              </div>
              </div>
              
              <div className="text-center w-full ">
                <p className="text-md font-semibold px-4 text-left text-gray-900 mb-1 flex justify-between">Quantity <span>{order.quantity}</span></p>
                <p className="text-md font-semibold px-4 text-left text-gray-900 mb-1 flex justify-between">Order Placed <span>{order.orderDate}</span></p>
                <p className="text-md font-semibold px-4 text-left text-gray-900 mb-1 flex justify-between ">Delivery <span>{order.deliveryDate}</span></p>
              </div>
            </div>
            


            <div className="flex flex-col gap-2 mt-auto w-full">
              <button
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-800 bg-white hover:bg-gray-100 transition"
                onClick={() => handleViewDetails(order.id)}
              >
                View Order Details
              </button>
              <button className="w-full px-4 py-2 rounded-md text-xs text-white bg-pink-500 hover:bg-pink-600 transition">
                Order Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
