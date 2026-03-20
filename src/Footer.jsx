import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      
      <h2 style={styles.logo}>Rahul</h2>

      <p style={styles.text}>
        © {new Date().getFullYear()} Rahul. All rights reserved.
      </p>

      {/* Social Cards */}
      <div style={styles.socials}>
        
        <a
          href="https://github.com/rahulsharma-xd"
          target="_blank"
          rel="noreferrer"
          style={styles.card}
          className="socialCard"
        >
          <FaGithub style={styles.icon} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/rahulsharma4uu"
          target="_blank"
          rel="noreferrer"
          style={styles.card}
          className="socialCard"
        >
          <FaLinkedin style={styles.icon} />
          LinkedIn
        </a>

        <a
          href="mailto:rahulsharmak771@gmail.com"
          style={styles.card}
          className="socialCard"
        >
          <FaEnvelope style={styles.icon} />
          Email
        </a>

      </div>

    </footer>
  );
}

const styles = {
  footer: {
    padding: "50px 20px",
    background: "#020617",
    color: "white",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
  },

  logo: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#38bdf8",
  },

  text: {
    fontSize: "14px",
    marginBottom: "25px",
    color: "#94a3b8",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 18px",
    background: "#0f172a",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#38bdf8",
    fontWeight: "bold",
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
    transition: "0.3s",
  },

  icon: {
    fontSize: "18px",
  },
};

export default Footer;