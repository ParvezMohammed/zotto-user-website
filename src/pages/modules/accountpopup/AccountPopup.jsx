import React from "react";
import { FaUser, FaBox, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountPopup = () => {
  const navigate = useNavigate();

  const handleClick = (action) => {
    if (action === "Logout") {
      navigate("/logoutconfirm");
    } else if (action === "My Profile") {
      navigate("/profile");
    } else if (action === "Orders") {
      navigate("/orders");
    } else {
      alert(`You clicked on ${action}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 shadow-md" style={{ width: 200 }}>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleClick("My Profile")}
            className="flex items-center gap-2 bg-gray-200 p-3 rounded-md hover:bg-gray-300"
          >
            <FaUser className="text-pink-500" />
            <span className="text-gray-700 font-medium">My Profile</span>
          </button>
          <button
            onClick={() => handleClick("Orders")}
            className="flex items-center gap-2 bg-gray-200 p-3 rounded-md hover:bg-gray-300"
          >
            <FaBox className="text-pink-500" />
            <span className="text-gray-700 font-medium">Orders</span>
          </button>
          <button
            onClick={() => handleClick("Logout")}
            className="flex items-center gap-2 bg-gray-200 p-3 rounded-md hover:bg-gray-300"
          >
            <FaSignOutAlt className="text-pink-500" />
            <span className="text-gray-700 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPopup;
