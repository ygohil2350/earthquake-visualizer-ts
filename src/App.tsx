// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EarthquakeVisualizer from "./components/EarthquakeVisualizer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <EarthquakeVisualizer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
