// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-center md:text-left">
          &copy; 2024 Earthquake Visualizer. All Rights Reserved.
        </p>
        <div className="text-sm text-center md:text-right mt-2 md:mt-0">
          <a
            href="https://earthquake.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Data provided by USGS Earthquake API
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
