import { useNavigate } from "react-router-dom";
import React from "react";
const OrderConfirmed=()=>{
    const navigate=useNavigate();

    const handelCancel=()=>{
        navigate('/cancel-Order');
    };
    const handelviewDetail=()=>{
        navigate('/view-detail');
    };
    const handelTrack=()=>{
      navigate('/trackorder');
    };
    return(
        <div>
        <div className="mb-8 mt-24 items-center justify-center">
        <h2 className="text-xl font-bold pl-16">Order Summary(3 items)</h2>
        
        <div className="my-6 px-4">
          <div className="flex pl-16 gap-2 ">
          <p className="font-medium ">Delivered to:</p>
          
            <div>
            <p className="text-gray-700">Rosa Baumbach</p>             
              <p className="text-gray-700">9545475411</p>
              <p className="text-gray-700">09755 MacGyver Neck</p>
              <p className="text-gray-700">New Lavinafurt</p>
              <p className="text-gray-700">50850-0995</p>
            </div>
          </div>
        </div>
      </div>
           
      
      <div className="flex justify-center flex-wrap gap-8 mt-6">
        <button onClick={handelCancel} className="bg-pink-500 text-white w-[200px] h-12 rounded-full items-center justify-center ">
          Cancel Order
        </button>
        <button onClick={handelTrack} className="bg-pink-500 text-white w-48 h-12 rounded-full items-center justify-center ">
          Track Order
        </button>
        <button 
        onClick={handelviewDetail} className="bg-pink-500 text-white w-48 h-12 rounded-full items-center justify-center ">
          View Order Details
        </button>
      </div>
    </div>
      
    );
};
export default OrderConfirmed;