import { useState } from "react";
import "./App.css";
import Events from "./Components/Events";
import Map from "./Components/Map";
import {
  UniversityEvents,
  universityEventsList,
} from "./data/universityEvents";

function App() {
  const [selectedUniversity, setSelectedUniversity] =
    useState<UniversityEvents | null>(null);
  const handleUniversityClick = (universityName: string) => {
    const university = universityEventsList.find(
      (uni) => uni.universityName === universityName
    );
    console.log(university);
    setSelectedUniversity(university || null);
  };
  return (
    <>
      <div>
        <div className="row m-0">
          <div className="col-md-5">
            <Map onUniversityClick={handleUniversityClick} />
          </div>
          <div className="col-md-7">
            <Events selectedUniversity={selectedUniversity} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
