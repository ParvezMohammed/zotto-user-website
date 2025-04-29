import { useNavigate } from "react-router-dom";
const OrderConfirmed=()=>{
    const navigate=useNavigate();

    const handelCancel=()=>{
        navigate('/cancel-Order');
    };
    const handelviewDetail=()=>{
        navigate('/ViewDetail');
    };
    const handelTrack=()=>{
      navigate('/Trackorder');
    };
    return(
        <div>
            <p>
               Order Summary<br/>
            </p>
           
      
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