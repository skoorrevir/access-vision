import ClinicTeam from ".././components/ClinicTeam";

export default function TeamPage() {

    return (
        <main className="teamPage">
            <h1 className="team-page-header">Meet our Team</h1>
            <section id="schedule">
                <ClinicTeam />
            </section>
          
        </main>
    )
}