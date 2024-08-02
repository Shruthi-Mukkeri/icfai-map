import { useEffect } from "react";
import L, { LatLngTuple } from "leaflet";
interface Campus {
  name: string;
  location: LatLngTuple;
}

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([24.1989808, 82.6403614], 5); // Centered around India

    // Add a tile layer (e.g., OpenStreetMap tiles)
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Campus list
    const campusList: Campus[] = [
      {
        name: "ICFAI University Himachal Pradesh",
        location: [30.8831, 76.8755],
      },
      { name: "ICFAI University Dehradun", location: [30.3631, 77.8761] },
      { name: "ICFAI University Jaipur", location: [26.9124, 75.7873] },
      { name: "ICFAI University Sikkim", location: [27.3352, 88.6024] },
      { name: "ICFAI University Nagaland", location: [25.8374, 93.7626] },
      { name: "ICFAI University Meghalaya", location: [25.5674, 91.9001] },
      { name: "ICFAI University Tripura", location: [23.9343, 91.3385] },
      { name: "ICFAI University Mizoram", location: [23.8006, 92.7279] },
      { name: "ICFAI University Jharkhand", location: [23.3739, 85.2364] },
      { name: "ICFAI University Raipur", location: [21.2514, 81.6296] },
      { name: "IFHE Hyderabad", location: [17.4034, 78.4831] },
      { name: "ICFAI Business School Dehradun", location: [30.3628, 77.8767] },
      { name: "ICFAI Business School Gurgaon", location: [28.41, 77.0773] },
      { name: "ICFAI Business School Jaipur", location: [26.8908, 75.8916] },
      { name: "ICFAI Business School Ahmedabad", location: [23.1636, 72.5935] },
      { name: "ICFAI Business School Kolkata", location: [22.5733, 88.4365] },
      { name: "ICFAI Business School Mumbai", location: [19.1203, 72.8311] },
      { name: "ICFAI Business School Hyderabad", location: [17.4203, 78.2179] },
      { name: "ICFAI Business School Pune", location: [18.5161, 73.9386] },
      { name: "ICFAI Business School Bengaluru", location: [12.9716, 77.5946] },
    ];

    // Add markers for each campus
    campusList.forEach((campus) => {
      L.marker(campus.location).addTo(map).bindPopup(`<b>${campus.name}</b>`);
    });

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "600px" }}></div>;
};

export default Map;
