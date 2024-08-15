import { LatLngTuple } from "leaflet";
export default interface Campus {
  name: string;
  location: LatLngTuple;
}

// Campus list
export const campusList: Campus[] = [
  { name: "ICFAI University Himachal Pradesh", location: [30.8831, 76.8755] },
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
