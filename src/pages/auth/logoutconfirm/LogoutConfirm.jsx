import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutConfirm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-[32px] text-center font-medium text-gray-900 mb-8">
          Are you sure you want to logout?
        </h2>

        <button
          onClick={handleLogout}
          className="w-full bg-[#F178B6] text-white py-4 rounded-xl font-medium text-xl hover:bg-[#f06bab] transition-colors"
        >
          Logout
        </button>

        <button
          onClick={handleCancel}
          className="w-full border border-[#F178B6] text-[#F178B6] py-4 rounded-xl font-medium text-xl hover:bg-pink-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutConfirm;
