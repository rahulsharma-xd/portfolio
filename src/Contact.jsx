function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Get In Touch</h2>

      <div style={styles.wrapper}>
        
        {/* LEFT INFO CARD */}
        <div style={styles.infoCard}>
          <h3 style={styles.subHeading}>Let's Connect 👋</h3>

          <p style={styles.infoText}>📧 rahulsharmak771@gmail.com</p>
          <p style={styles.infoText}>📱 +91 XXXXXXXX</p>
          <p style={styles.infoText}>📍 India</p>
        </div>

        {/* RIGHT FORM CARD */}
        <form style={styles.formCard}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />

          <textarea
            placeholder="Your Message"
            style={styles.textarea}
          />

          <button
            style={styles.btn}
            onMouseEnter={(e) => (e.target.style.background = "#0ea5e9")}
            onMouseLeave={(e) => (e.target.style.background = "#38bdf8")}
          >
            Send Message 🚀
          </button>
        </form>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "linear-gradient(to right, #020617, #0f172a)",
    color: "white",
    textAlign: "center",
  },

  heading: {
    fontSize: "38px",
    marginBottom: "50px",
    color: "#38bdf8",
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  /* LEFT CARD */
  infoCard: {
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "15px",
    width: "300px",
    textAlign: "left",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  subHeading: {
    marginBottom: "20px",
    color: "#22c55e",
  },

  infoText: {
    marginBottom: "10px",
    color: "#cbd5f5",
  },

  /* RIGHT FORM */
  formCard: {
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "white",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "white",
    height: "120px",
    outline: "none",
  },

  btn: {
    padding: "12px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Contact;