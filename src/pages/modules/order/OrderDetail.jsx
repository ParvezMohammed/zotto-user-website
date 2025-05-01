import { useState } from "react";
import image35 from "../../../assets/images/image35.png"; //

export default function OrderDetail() {
  const [orderData] = useState({
    orderPlaced: "10 January 2025",
    orderDelivered: "12 January 2025",
    orderNumber: "0123456789",
    shippingAddress:
      "Rosa Baumbach 09755 MacGyver Neck, New Lavingfurt 50850-0995",
    paymentMethod: "Cash on Delivery",
    summary: {
      price: "₹.123",
      discount: "-₹.0",
      coupons: "-₹.0",
      deliveryCharges: "₹.50 Free",
      tax: "₹.0",
      totalAmount: "₹.1230",
    },
    items: [
      {
        id: 1,
        name: "Softcare Sanitary Pads",
        count: "15 Pads",
        price: "₹123.00",
        image: image35,
      },
      {
        id: 2,
        name: "Softcare Sanitary Pads",
        count: "30 Pads",
        price: "₹223.00",
        image: image35,
      },
      {
        id: 3,
        name: "Softcare Sanitary Pads",
        count: "30 Pads",
        price: "₹223.00",
        image: image35,
      },
    ],
  });

  return (
    <div className=" text-left mx-auto p-6 bg-white">
      <h1 className="text-xl font-bold font-poppins mb-6">Order Details</h1>

      {/* Products Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        {orderData.items.map((item) => (
          <div key={item.id} className="w-full sm:w-64  p-4">
            {/* Image placeholder - replace with your actual image */}
            <div className="h-40  mb-3 flex items-center justify-center">
              {/* You'll replace this with your image from Figma */}
              <img src={item.image} alt="Product" />
            </div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.count}</p>
            <p className="font-sm text-gray-600 mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <div className="flex mb-4">
            <p className="font-bold w-[182px] text-left pr-4">
              Order Placed on
            </p>
            <p className="flex-1">{orderData.orderPlaced}</p>
          </div>

          <div className="flex mb-4">
            <p className="font-bold w-[182px] text-left pr-4">
              Order Delivered on
            </p>
            <p className="flex-1">{orderData.orderDelivered}</p>
          </div>

          <div className="flex mb-4">
            <p className="font-bold w-[182px] text-left pr-4">Order Number</p>
            <p className="flex-1">{orderData.orderNumber}</p>
          </div>

          <div className="flex mb-4">
            <p className="font-bold w-[182px] text-left pr-4">
              Shipping Address
            </p>
            <p className="flex-1">{orderData.shippingAddress}</p>
          </div>

          <div className="flex mb-4">
            <p className="font-bold w-[182px] text-left pr-4">Payment Method</p>
            <p className="flex-1">{orderData.paymentMethod}</p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="flex">
        <h2 className="font-bold mb-4 left-[120px] top-[979px] w-[182px] pr-4 ">
          Order Summary
        </h2>

        <div className="border-t pt-2 left-[484px] ">
          <div className="flex justify-between mb-2">
            <span>Price(10item)</span>
            <span>{orderData.summary.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>{orderData.summary.discount}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Coupons For You</span>
            <span>{orderData.summary.coupons}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-500">
              {orderData.summary.deliveryCharges}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>{orderData.summary.tax}</span>
          </div>
          <div className="border-t pt-3 mt-3 flex justify-between font-bold">
            <span>Total Amount</span>
            <span>{orderData.summary.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
