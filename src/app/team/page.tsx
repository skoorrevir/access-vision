import ClinicTeam from "@/components/ClinicTeam";
import styles from "@/components/ClinicTeam.module.css";

export default function TeamPage() {

    return (
        <main className="teamPage">
            <h1 className={styles.teamPageHeader}>Meet our Team</h1>
            <section id="schedule">
                <ClinicTeam />
            </section>
          
        </main>
    )
}