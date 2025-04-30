import React from "react";
import { FaUser, FaBox, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = (action) => {
    if (action === "Logout") {
      navigate("/logout");
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
    <div className="bg-white w-48 p-4 shadow-md">
      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleClick("My Profile")}
          className="flex items-center gap-2 bg-gray-100 px-3 py-2 text-sm text-gray-700 w-full text-left"
        >
          <FaUser className="text-pink-500" />
          <span>My Profile</span>
        </button>

        <button
          onClick={() => handleClick("Orders")}
          className="flex items-center gap-2 bg-gray-100 px-3 py-2 text-sm text-gray-700 w-full text-left"
        >
          <FaBox className="text-pink-500" />
          <span>Orders</span>
        </button>

        <button
          onClick={() => handleClick("Logout")}
          className="flex items-center gap-2 bg-gray-100 px-3 py-2 text-sm text-gray-700 w-full text-left"
        >
          <FaSignOutAlt className="text-pink-500" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
