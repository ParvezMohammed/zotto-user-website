import React from "react";
import { useNavigate } from "react-router-dom";

const LocationAccess = () => {
  const navigate = useNavigate();

  const handleAccessLocation = () => {
    console.log("Requesting Location Access...");
    // Implement location permission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border text-center">
        <img
          src="/cuate1.png" // You need to place the image inside "public" folder and name it "location-image.png"
          alt="Location Access"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">Location Access</h2>
        <p className="text-gray-500 mb-6">To navigate your location at ease</p>

        <button
          onClick={handleAccessLocation}
          className="w-full bg-[#FF6584] text-white py-3 rounded-md font-medium hover:brightness-90 transition"
        >
          Access Location
          <span role="img" aria-label="location">
            📍
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-gray-400 mt-4 text-sm font-medium hover:underline"
        >
          Skip
        </button>

        <p className="mt-6 text-gray-600 text-xs">
          <span className="font-bold">ZOTTO</span> Will Access Your Location
          Only While Using The App
        </p>
      </div>
    </div>
  );
};

export default LocationAccess;
