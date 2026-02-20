import Image from "next/image";
import team from "./team/team.json";
import styles from "./ClinicTeam.module.css";

export default function ClinicTeam() {
  return (
    <div id="team-container" className={styles.clinicTeam}>
      {team.map((member, index) => (
        <div key={index} className={styles.clinicTeamCard}>
          <div className={styles.teamProfile}>
            <div style={{ position: "relative", width: "150px", height: "150px", background: "#ccc", borderRadius: "50%", flexShrink: 0, overflow: "hidden" }}>
              <Image 
                src={member.picture} 
                alt={member.name} 
                fill 
                style={{ objectFit: "cover" }} 
              />
            </div>
            <div className={styles.profileText}>
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.biography}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
