import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add phone validation here
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-2">Log In</h2>
        <p className="text-center text-gray-500 mb-6">
          Please Log in to your account
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6584] mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FF6584] text-white py-3 rounded-md font-medium hover:brightness-90 transition"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
