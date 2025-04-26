import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutConfirm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    console.log("User logged out");
    // Redirect to login or home
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center border">
        <h2 className="text-lg font-semibold mb-6">
          Are you sure you want to logout?
        </h2>

        <button
          onClick={handleLogout}
          className="w-full bg-[#FF6584] text-white py-3 rounded-md font-medium hover:brightness-90 transition mb-4"
        >
          Logout
        </button>

        <button
          onClick={handleCancel}
          className="w-full border-2 border-[#FF6584] text-[#FF6584] py-3 rounded-md font-medium hover:bg-pink-50 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutConfirm;
