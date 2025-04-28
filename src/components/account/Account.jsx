import React from "react";
import { FaUser, FaBox, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = (action) => {
    if (action === "Logout") {
      navigate("/logoutconfirm");
    } else if (action === "My Profile") {
      navigate("/profile");
    } else if (action === "Orders") {
      navigate("/orders");
    }
    if (onClose) {
      onClose(); 
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-48">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleClick("My Profile")}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
        >
          <FaUser className="text-pink-500" />
          <span className="text-gray-700 text-sm">My Profile</span>
        </button>
        <button
          onClick={() => handleClick("Orders")}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
        >
          <FaBox className="text-pink-500" />
          <span className="text-gray-700 text-sm">Orders</span>
        </button>
        <button
          onClick={() => handleClick("Logout")}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
        >
          <FaSignOutAlt className="text-pink-500" />
          <span className="text-gray-700 text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
