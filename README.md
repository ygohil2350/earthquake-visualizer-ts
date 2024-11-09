# Earthquake Visualizer

A React TypeScript application that visualizes recent earthquake data on an interactive map. The app fetches earthquake data from the USGS Earthquake API and displays markers on a Leaflet map based on the earthquake's location and magnitude.

## Features

- Displays real-time earthquake data on a world map.
- Earthquakes are marked on the map using color-coded markers based on their magnitude:
  - Green for low magnitude (less than 4)
  - Orange for medium magnitude (4 - 4.9)
  - Red for high magnitude (5 or greater)
- Interactive map powered by [Leaflet.js](https://leafletjs.com/) and styled with OpenStreetMap tiles.
- Earthquake details are shown in a popup when a marker is clicked, including:
  - Location of the earthquake.
  - Magnitude.
  - Time of the earthquake.

## Getting Started

### Prerequisites

Before running this app, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: 16.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/earthquake-visualizer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd earthquake-visualizer
   ```
3. Install the required dependencies:
   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:

   Using npm:

   ```bash
   npm start
   ```

   Or using Yarn:

   ```bash
   yarn start
   ```

2. Open your browser and visit http://localhost:3000 to view the application.

### Folder Structure

earthquake-visualizer/
│
├── public/ # Public assets
│ ├── index.html # HTML template
│ └── ...
│
├── src/ # Source code
│ ├── components/ # React components (e.g., EarthquakeVisualizer.tsx)
│ ├── App.tsx # Main App component
│ ├── index.tsx # Entry point for React app
│ └── ...
│
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # This README file

### How It Works

`EarthquakeVisualizer.tsx`
The main component of the app, EarthquakeVisualizer, does the following:

1. State Management:
   - `earthquakes`: Stores the fetched earthquake data.
   - `loading`: Indicates whether the data is still being fetched.
   - `error`: Stores error messages if the data fetch fails.
2. Data Fetching :
   - The app fetches earthquake data from the USGS Earthquake [API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson) when the component mounts.
   - The data is stored in the `earthquakes` state.
3. Displaying Data:
   - The app uses the Leaflet library to display a map with earthquake markers.
   - Each earthquake marker is color-coded based on its magnitude using the `getMarkerIcon` function:
     - Green for magnitude < 4.
     - Orange for magnitude 4 - 4.9.
     - Red for magnitude >= 5.
4. Popup Details:
   - When a marker is clicked, a popup appears with the following details:
     - Location (place).
     - Magnitude.
     - Time of occurrence (formatted using JavaScript's toLocaleString() method).
5. Error Handling:
   - If there's an error fetching the earthquake data, an error message is displayed.

### Dependencies

- `react`: The React library.
- `react-dom`: Provides DOM rendering support for React.
- `react-scripts`: Scripts and configuration used by Create React App.
- `axios`: A promise-based HTTP client for making requests to the USGS Earthquake API.
- `react-leaflet`: A React wrapper for Leaflet.js, used to create interactive maps.
- `leaflet`: A library for creating interactive maps.
- `tailwindcss`: A utility-first CSS framework used for styling.

### Styling

The application uses [Tailwind CSS](https://tailwindcss.com/) for utility-based styling. The map container and loading/error messages are styled with Tailwind classes.

### Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and create a pull request.

1. Fork the repo.
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes

```bash
git commit -am 'Add new feature'
```

5. Push to the branch

```bash
git push origin feature/your-feature
```

6. Create a new pull request.

#### License

This project is licensed under the MIT License - see the `LICENSE` file for details.
