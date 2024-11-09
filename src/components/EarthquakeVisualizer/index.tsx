// src/EarthquakeVisualizer.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// TypeScript types for the API data
interface EarthquakeProperties {
  place: string;
  mag: number;
  time: number;
}

interface EarthquakeGeometry {
  coordinates: [number, number]; // [longitude, latitude]
}

interface EarthquakeFeature {
  id: string;
  properties: EarthquakeProperties;
  geometry: EarthquakeGeometry;
}

interface EarthquakeData {
  features: EarthquakeFeature[];
}

const EarthquakeVisualizer: React.FC = () => {
  const [earthquakes, setEarthquakes] = useState<EarthquakeFeature[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<EarthquakeData>(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
      )
      .then((response) => {
        setEarthquakes(response.data.features);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load earthquake data");
        setLoading(false);
      });
  }, []);

  // Function to generate a marker icon based on earthquake magnitude
  const getMarkerIcon = (magnitude: number): L.DivIcon => {
    let color = "green";
    if (magnitude >= 5) {
      color = "red";
    } else if (magnitude >= 4) {
      color = "orange";
    }
    return new L.DivIcon({
      className: "custom-icon",
      html: `<div style="background-color: ${color}; border-radius: 50%; padding: 2px; width: 20px; height: 20px; text-align: center; color: white; font-weight: bold;">${magnitude}</div>`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      {loading && (
        <p className="text-xl text-gray-700">Loading earthquake data...</p>
      )}
      {error && <p className="text-red-600">{error}</p>}

      <div className="w-full max-w-4xl h-[60vh] md:h-[70vh] bg-white shadow-lg rounded-lg">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {earthquakes.map((quake) => {
            const { geometry, properties } = quake;
            const { coordinates } = geometry;
            const { place, mag, time } = properties;
            const [longitude, latitude] = coordinates;

            return (
              <Marker
                key={quake.id}
                position={[latitude, longitude]}
                icon={getMarkerIcon(mag)}
              >
                <Popup>
                  <strong>{place}</strong>
                  <br />
                  Magnitude: {mag}
                  <br />
                  Time: {new Date(time).toLocaleString()}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default EarthquakeVisualizer;
