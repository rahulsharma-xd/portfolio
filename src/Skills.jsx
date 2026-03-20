function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      items: ["Python"],
    },
    {
      title: "Database",
      items: ["SQL"],
    },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>

      <div style={styles.container}>
        {skills.map((category, i) => (
          <div
            key={i}
            style={styles.categoryCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.5)";
            }}
          >
            <h3 style={styles.categoryTitle}>{category.title}</h3>

            <div style={styles.skillsWrap}>
              {category.items.map((skill, index) => (
                <span
                  key={index}
                  style={styles.skill}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#38bdf8")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "#1e293b")
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background:
      "linear-gradient(135deg, #020617, #0f172a, #020617)", // 👈 gradient fix
    color: "white",
    textAlign: "center",
  },

  heading: {
    fontSize: "38px",
    marginBottom: "50px",
    color: "#38bdf8",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  categoryCard: {
    background: "rgba(255,255,255,0.05)", // 👈 glass effect
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    minWidth: "250px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    transition: "0.3s",
  },

  categoryTitle: {
    marginBottom: "18px",
    color: "#22c55e",
    fontSize: "20px",
  },

  skillsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },

  skill: {
    background: "#1e293b",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#e2e8f0",
    transition: "0.3s",
    cursor: "pointer",
  },
};

export default Skills;