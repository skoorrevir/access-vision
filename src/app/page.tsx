import ClinicSchedule from "./components/ClinicSchedule";
export default function Home() {
  return (
    <main id="home">
      
      <section className="hero">
        <h1>Bringing Comprehensive Eye Care to Alabama Communities</h1>
        <p>Mobile eye clinics providing accessible care to the underserved.</p>
        <a href="#schedule" className="btn">Find a Clinic Near You</a>
      </section>

      <div className="quick-info">
        <div className="info-item"><span>&#10003;</span> Free/Low Cost</div>
        <div className="info-item"><span>&#128083;</span> Exams \& Glasses</div>
        <div className="info-item"><span>&#128106;</span> All Ages</div>
      </div>

      <section id="schedule">
        <h2>Upcoming Clinics</h2>
        <ClinicSchedule />
      </section>

      <section>
        <div className="poster-frame">
          <div className="poster-placeholder">
            <p><strong>Access Vision Outreach Flyer (PDF)</strong></p>
          </div>

          <p>
            <strong>
              Download our latest event flyer to share with your community.
            </strong>
          </p>

          <a
            href="/test file download.pdf" // Note: Put this PDF in your 'public' folder!
            className="btn"
            style={{ padding: "10px 20px", fontSize: "1rem", marginTop: "10px" }}
            download
            aria-label="Download Access Vision Outreach Flyer"
          >
            Download Flyer (PDF)
          </a>
        </div>
      </section>

      <section id="about" style={{ backgroundColor: "white" }}>
        <h2>About Us</h2>
        <p>
          Access Vision is a nonprofit organization created to address critical
          gaps in eye care for uninsured and underinsured individuals across
          Alabama. Through a lean, volunteer-driven model, we provide
          comprehensive eye exams and prescription glasses at very low cost,
          making quality vision care accessible to those who need it most.
        </p>
        <p>
          <br /> We proudly accept all major insurance carriers and work
          intentionally to keep out-of-pocket costs far below traditional,
          for-profit models. Most importantly, no one is ever turned away due to
          an inability to pay.
        </p>

        <h3 style={{ marginTop: "2rem", color: "var(--accent-teal)" }}>
          Partnerships
        </h3>
        <p>
          We collaborate with local schools, churches, and nonprofits to host
          our mobile clinics directly where the need is greatest.
        </p>
      </section>

      <section id="mission">
        <h2>Our Mission</h2>
        <div style={{ background: "#e3f2fd", padding: "20px", borderLeft: "5px solid var(--primary-blue)", marginBottom: "2rem" }}>
          <p><strong>Mission:</strong> To improve health outcomes by providing accessible eye care.</p>
          <p><strong>Vision:</strong> A future where no individual experiences preventable vision loss due to lack of access.</p>
        </div>

        <h3>Core Services</h3>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">&#128065;</div>
            <h4>Comprehensive Exams</h4>
            <p>Full medical eye examinations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">&#128083;</div>
            <h4>Prescription Glasses</h4>
            <p>Provided on-site or ordered for patients.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">&#9877;</div>
            <h4>Disease Detection</h4>
            <p>Screening for Diabetes, Hypertension, and Glaucoma.</p>
          </div>
        </div>
      </section>

      <section id="team" style={{ backgroundColor: "white" }}>
        <h2>Faculty & Leadership</h2>
        <div className="team-profile">
          <div style={{ width: "150px", height: "150px", background: "#ccc", borderRadius: "50%", flexShrink: 0 }}></div>
          <div className="profile-text">
            <h3>Dr. Kent Daum</h3>
            <p><strong>Executive Director & Lead Optometrist</strong></p>
            <p>
              Dr. Kent Daum, O.D., Ph.D. is a licensed optometrist and the
              clinical lead for Access Vision's Mobile Eye Clinic. He conducts
              all eye examinations as a volunteer...
              <br /><br />
              Dr. Daum earned both his Doctor of Optometry and Ph.D. from Ohio
              State University...
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
