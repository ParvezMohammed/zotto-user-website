import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock database of orders
const ordersDatabase = {
  1: {
    products: [
      {
        id: 1,
        image: './images/orders4.png',
        name: 'Softcare Sanitary Pads',
        quantity: '10 Pads',
        price: '₹123.00'
      },
      {
        id: 2,
        image: './images/orders4.png',
        name: 'Softcare Sanitary Pads',
        quantity: '10 Pads',
        price: '₹123.00'
      }
    ],
    orderInfo: {
      orderPlacedOn: '10 January 2025',
      orderDeliveredOn: '12 January 2025',
      orderNumber: '0123456789',
      shippingAddress: 'Rosa Baumbach 09755 MacGyver Neck, New Lavinafurt 50850-0995',
      paymentMethod: 'Cash on Delivery'
    },
    orderSummary: {
      pricePerItem: '₹123',
      discount: '₹0',
      couponsForYou: '₹0',
      deliveryCharges: '₹50',
      tax: '₹0',
      totalAmount: '₹1230'
    }
  },
  // Add more orders as needed
};

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Ensure the orderId is a number and match it against the mock database
  const orderDetails = ordersDatabase[parseInt(orderId, 10)];

  if (!orderDetails) {
    return <div className="p-5 max-w-4xl mx-auto">Order not found</div>;
  }

  const handleWriteReview = () => {
    navigate(`/addreview`);
  };

  return (
    <div className="p-12 bg-white mx-auto">
      <h2 className="text-xl font-medium text-gray-800 mb-8">Order Details</h2>

      <div className="grid grid-cols-2 gap-10 mb-10 justify-center">
        {orderDetails.products.map(product => (
          <div key={product.id} className="flex flex-col items-center w-36">
            <img src={product.image} alt={product.name} className="w-30 h-30 object-contain mb-2" />
            <h3 className="text-sm font-medium text-gray-800 text-center mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{product.quantity}</p>
            <p className="text-xs text-gray-800 mb-2">{product.price}</p>
            <button
              onClick={handleWriteReview}
              className="text-pink-500 text-xs bg-none border-none cursor-pointer p-0"
            >
              Write a review
            </button>
          </div>
        ))}
      </div>

      <div className="mb-10">
        {['Order Placed on', 'Order Delivered on', 'Order Number', 'Shipping Address', 'Payment Method'].map((label, index) => (
          <div key={index} className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">{label}</label>
            <span className="text-sm text-gray-800">{orderDetails.orderInfo[label.toLowerCase().replace(/ /g, '')]}</span>
          </div>
        ))}
      </div>

      <div className="max-w-sm">
        <h3 className="text-sm font-medium text-gray-800 mb-4">Order Summary</h3>
        {['pricePerItem', 'discount', 'couponsForYou', 'deliveryCharges', 'tax'].map((key, index) => (
          <div key={index} className="flex justify-between items-center mb-3 text-sm text-gray-800">
            <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
            <span>{key === 'deliveryCharges' ? `${orderDetails.orderSummary[key]} Free` : `₹${orderDetails.orderSummary[key]}`}</span>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 font-medium text-sm text-gray-800">
          <span>Total Amount</span>
          <span>₹{orderDetails.orderSummary.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
