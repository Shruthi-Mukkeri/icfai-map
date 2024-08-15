import { useEffect } from "react";
import L from "leaflet";
import { campusList } from "../data/campusLocations";
interface Props {
  onUniversityClick: (universityName: string) => void;
}
const Map = ({ onUniversityClick }: Props) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([24.1989808, 82.6403614], 5); // Centered around India

    // Add a tile layer (e.g., OpenStreetMap tiles)
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each campus
    campusList.forEach((campus) => {
      const marker = L.marker(campus.location).addTo(map);
      marker.bindPopup(`<b>${campus.name}</b>`);
      marker.on("click", () => {
        console.log(campus.name);
        onUniversityClick(campus.name);
      });
    });

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="mapContainer"></div>;
};

export default Map;
