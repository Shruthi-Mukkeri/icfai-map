import { UniversityEvents } from "../data/universityEvents";
import styles from "./Events.module.css";
interface Props {
  selectedUniversity: UniversityEvents | null;
}
const Events = ({ selectedUniversity }: Props) => {
  return (
    <div className={styles.eventSection}>
      {selectedUniversity ? (
        <div className="p-2">
          <h2>{selectedUniversity.universityName}</h2>
          {selectedUniversity.events.map((uni, index) => (
            <div className={`${styles.card} mb-3`} key={index}>
              <h4>{uni.eventName}</h4>
              <p className={styles.date}>{uni.eventTime}</p>
              <p>{uni.eventDescription}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="p-2">Please Select the university</h2>
      )}
    </div>
  );
};

export default Events;
