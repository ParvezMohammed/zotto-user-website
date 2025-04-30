import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Order.css';

const orders = [
  {
    id: 1,
    productImg: './images/ordes1.png',
    productName: 'Softcare Sanitary Pads',
    quantity: '10 Pads',
    price: '₹123.00',
    orderDate: '10 Jan 2025',
    deliveryDate: '12 Jan 2025',
    delivered: true,
  },
  {
    id: 2,
    productImg: './images/orders2.png',
    productName: 'Anytime Sanitary Pads',
    quantity: '10 Pads',
    price: '₹256.00',
    orderDate: '20 Mar 2025',
    deliveryDate: 'Not Delivered yet',
    delivered: false,
  },
  {
    id: 3,
    productImg: './images/orders3.png',
    productName: 'Ladysoft Sanitary Pads',
    quantity: '8 Pads',
    price: '₹245.00',
    orderDate: '20 Mar 2025',
    deliveryDate: 'Not Delivered yet',
    delivered: false,
  },
  {
    id: 4,
    productImg: './images/orders4.png',
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
    <div className="w-full max-w-md mx-auto px-2 py-4 bg-white min-h-screen">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">My Orders</h2>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-50 rounded-lg p-3 flex flex-col sm:flex-row items-center sm:items-start shadow-sm">
            <img src={order.productImg} alt={order.productName} className="w-20 h-20 object-contain mb-2 sm:mb-0 sm:mr-4 border border-gray-200 rounded-md p-2" />
            <div className="flex-1 w-full">
              <div className="font-medium text-gray-800 text-base mb-1">{order.productName}</div>
              <div className="text-xs text-gray-500 mb-1">Quantity: {order.quantity}</div>
              <div className="text-xs text-gray-500 mb-1">Order Placed: {order.orderDate}</div>
              <div className="text-xs text-gray-500 mb-1">Delivery: {order.deliveryDate}</div>
              <div className="text-xs text-gray-800 font-semibold mb-2">{order.price}</div>
              <div className="flex flex-col gap-2 mt-2 w-full">
                <button
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-800 bg-white cursor-pointer whitespace-nowrap hover:bg-gray-100 transition"
                  onClick={() => handleViewDetails(order.id)}
                >
                  View Order Details
                </button>
                <button className="w-full px-4 py-2 rounded-md text-xs text-white bg-pink-500 cursor-pointer whitespace-nowrap hover:bg-pink-600 transition">
                  Order Again
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
