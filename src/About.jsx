function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.text}>
        Hi, I'm Rahul 👋 a passionate FULL STACK DEVELOPER.  
        I love building modern, responsive, and user-friendly web applications using React.
      </p>

      <p style={styles.text}>
        Currently, I'm learning ARTIFICIAL INTELIGANCE and working on real-world projects 
        to improve my skills and build a strong portfolio.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#38bdf8",
  },
  text: {
    maxWidth: "700px",
    margin: "10px auto",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#cbd5f5",
  },
};

export default About;