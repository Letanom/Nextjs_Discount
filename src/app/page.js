"use client";

import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculateDiscount = () => {
    setError(null);
    setResult(null); // Reset result on new calculation

    const parsedPrice = parseFloat(price);
    const parsedDiscount = parseFloat(discount);

    if (!parsedPrice || !parsedDiscount || parsedPrice <= 0 || parsedDiscount <= 0 || parsedDiscount > 100) {
      setError("Please enter a valid price and discount percentage.");
      return;
    }

    // Calculate the discount
    const discountAmount = (parsedPrice * parsedDiscount) / 100;
    const finalPrice = parsedPrice - discountAmount;

    // Update the result
    setResult({
      originalPrice: parsedPrice.toFixed(2),
      discountPercentage: parsedDiscount,
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6 animate-bounce">Discount Calculator</h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Price: </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="p-3 mt-1 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Discount (%): </label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount percentage"
              className="p-3 mt-1 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
            />
          </div>
        </div>
        <button
          onClick={calculateDiscount}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transform transition-transform duration-300 hover:scale-105"
        >
          Calculate
        </button>

        {error && <p className="text-red-500 text-center mt-4 animate-pulse">{error}</p>}

        {result && (
          <div className="mt-6 bg-indigo-100 p-4 rounded-md shadow-md animate-fade-in">
            <h2 className="text-xl font-semibold text-indigo-600 text-center mb-4">Discount Details</h2>
            <p className="text-lg text-gray-700">Original Price: <span className="font-bold">${result.originalPrice}</span></p>
            <p className="text-lg text-gray-700">Discount Percentage: <span className="font-bold">{result.discountPercentage}%</span></p>
            <p className="text-lg text-gray-700">Discount Amount: <span className="font-bold">${result.discountAmount}</span></p>
            <p className="text-lg text-gray-700">Final Price: <span className="font-bold">${result.finalPrice}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}
