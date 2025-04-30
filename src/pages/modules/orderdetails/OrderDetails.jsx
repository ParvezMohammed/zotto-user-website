import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock database of orders
const ordersDatabase = {
  1: {
    products: [
      {
        id: 1,
        image: '/images/orders4.png',
        name: 'Softcare Sanitary Pads',
        quantity: '10 Pads',
        price: '₹123.00'
      },
      {
        id: 2,
        image: '/images/orders4.png',
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
};

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const orderDetails = ordersDatabase[parseInt(orderId, 10)];

  if (!orderDetails) {
    return <div className="p-5 max-w-4xl mx-auto">Order not found</div>;
  }

  const handleWriteReview = () => {
    navigate(`/addreview`);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen px-2 py-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Order Details</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {orderDetails.products.map(product => (
          <div key={product.id} className="flex flex-col items-center w-full bg-gray-50 rounded-lg p-3">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mb-2" />
            <h3 className="text-base font-medium text-gray-800 text-center mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{product.quantity}</p>
            <p className="text-xs text-gray-800 mb-2">{product.price}</p>
            <button
              onClick={handleWriteReview}
              className="text-pink-500 text-xs bg-none border-none cursor-pointer p-0 hover:underline"
            >
              Write a review
            </button>
          </div>
        ))}
      </div>

      {/* Order Info */}
      <div className="mb-6">
        {[
          { label: 'Order Placed on', value: orderDetails.orderInfo.orderPlacedOn },
          { label: 'Order Delivered on', value: orderDetails.orderInfo.orderDeliveredOn },
          { label: 'Order Number', value: orderDetails.orderInfo.orderNumber },
          { label: 'Shipping Address', value: orderDetails.orderInfo.shippingAddress },
          { label: 'Payment Method', value: orderDetails.orderInfo.paymentMethod },
        ].map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
            <label className="text-sm font-medium text-gray-800 mb-1 sm:mb-0">{item.label}</label>
            <span className="text-sm text-gray-800 break-words max-w-full text-right sm:text-left">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-sm mx-auto bg-gray-50 rounded-lg p-4">
        <h3 className="text-base font-medium text-gray-800 mb-3">Order Summary</h3>

        {[
          { label: 'Price Per Item', value: orderDetails.orderSummary.pricePerItem },
          { label: 'Discount', value: orderDetails.orderSummary.discount },
          { label: 'Coupons For You', value: orderDetails.orderSummary.couponsForYou },
          { label: 'Delivery Charges', value: orderDetails.orderSummary.deliveryCharges },
          { label: 'Tax', value: orderDetails.orderSummary.tax },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="text-sm text-gray-800">{item.label}</label>
            <span className="text-sm text-gray-800">{item.value}</span>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <label className="text-base font-semibold text-gray-800">Total Amount</label>
          <span className="text-base font-semibold text-gray-800">{orderDetails.orderSummary.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
