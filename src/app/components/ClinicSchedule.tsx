import clinics from "./schedule/schedule.json";
import styles from "./ClinicSchedule.module.css";

export default function ClinicSchedule() {
  return (
    <div id="clinic-container" className={styles.clinicSchedule}>
      {clinics.map((clinic, index) => (
        <div key={index} className={styles.clinicCard}>
          
          <div className={styles.clinicInfo}>
            <h3>{clinic.location}</h3>
            <p><strong>Date:</strong> {clinic.date}</p>
            <p><strong>Time:</strong> {clinic.time}</p>
          </div>

          <div className={`${styles.status} ${clinic.status === "open" ? styles.open : styles.full}`}>
            {clinic.statusLabel}
          </div>

        </div>
      ))}
    </div>
  );
}