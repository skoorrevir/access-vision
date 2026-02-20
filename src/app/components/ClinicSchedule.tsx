import clinics from "./schedule/schedule.json";

export default function ClinicSchedule() {
  return (
    <div id="clinic-container" className="clinic-schedule">
      {clinics.map((clinic, index) => (
        <div key={index} className="clinic-card">
          
          <div className="clinic-info">
            <h3>{clinic.location}</h3>
            <p><strong>Date:</strong> {clinic.date}</p>
            <p><strong>Time:</strong> {clinic.time}</p>
          </div>

          <div className={`status ${clinic.status === "open" ? "open" : "full"}`}>
            {clinic.statusLabel}
          </div>

        </div>
      ))}
    </div>
  );
}