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
    <div className="p-5 bg-white pt-8 mt-16">
      <table className="w-full table-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-800">Product</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-800">Order Placed on</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-800">Delivery Date</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="4" className="px-4 py-2 text-sm text-gray-600">Delivered Product</td>
          </tr>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="px-4 py-4 min-w-[300px]">
                <div className="flex gap-4 items-start">
                  <img src={order.productImg} alt={order.productName} className="w-24 h-24 object-contain border border-gray-200 rounded-md p-2" />
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">{order.productName}</div>
                    <div className="text-sm text-gray-600">{order.quantity}</div>
                    <div className="text-sm text-gray-800 mt-1">{order.price}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-gray-800">{order.orderDate}</td>
              <td className="px-4 py-4 text-sm text-gray-800">{order.deliveryDate}</td>
              <td className="px-4 py-4">
                <div className="flex flex-col gap-2">
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white cursor-pointer whitespace-nowrap"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Order Details
                  </button>
                  <button className="px-4 py-2 rounded-md text-sm text-white bg-pink-500 cursor-pointer whitespace-nowrap">
                    Order Again
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
