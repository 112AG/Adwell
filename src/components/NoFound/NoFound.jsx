import React from "react";
import { Link } from "react-router-dom";

function NoFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NoFound;
