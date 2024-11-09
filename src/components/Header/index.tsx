// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold">Earthquake Visualizer</h1>
          <p className="text-lg mt-2">
            Track and visualize recent earthquake activity around the world.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://earthquake.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Powered by USGS Earthquake Data
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
