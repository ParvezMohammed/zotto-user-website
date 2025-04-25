import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(59);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleVerify = () => {
    if (otp.length === 6) {
      // Here you can call your API to verify the OTP
      navigate("/location-access");
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Verify Phone Number
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Code sent to <span className="font-medium">8877665598</span>. Please
          enter the code below.
        </p>

        <label className="block text-sm font-medium mb-1">Enter OTP</label>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          maxLength={6}
          className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6584] mb-6"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-[#FF6584] text-white py-3 rounded-md font-medium hover:brightness-90 transition"
        >
          Verify
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Didn’t receive code?
          <br />
          Resend code in 00:{timer.toString().padStart(2, "0")}{" "}
          <button
            disabled={timer !== 0}
            className="text-pink-500 font-medium hover:underline ml-1"
          >
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
