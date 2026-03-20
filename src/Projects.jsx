import p1 from "./assets/portfolio.png";
import p2 from "./assets/food.png";
import p3 from "./assets/weather.png";

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
      img: p1,
      tech: "React",
      link: "#",
    },
    {
      title: "Food Delivery App",
      desc: "React + Python backend.",
      img: p2,
      tech: "React + Python",
      link: "#",
    },
    {
      title: "Weather App",
      desc: "Live weather using API.",
      img: p3,
      tech: "API + JS",
      link: "#",
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>My Projects</h2>

      <div style={styles.container}>
        {projectData.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 25px 60px rgba(0,0,0,0.9)";
              e.currentTarget.querySelector("img").style.transform =
                "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.6)";
              e.currentTarget.querySelector("img").style.transform =
                "scale(1)";
            }}
          >
            <div style={styles.imageWrapper}>
              <img src={p.img} alt="project" style={styles.img} />
            </div>

            <div style={styles.content}>
              <h3>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>

              <p style={styles.tech}>{p.tech}</p>

              <a href={p.link} target="_blank" rel="noreferrer">
                <button
                  style={styles.btn}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#0ea5e9")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "#38bdf8")
                  }
                >
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: "100px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "50px",
    color: "#38bdf8",
  },

  container: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "linear-gradient(145deg, #020617, #0f172a)",
    borderRadius: "15px",
    width: "300px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    transition: "0.4s",
    cursor: "pointer",
    position: "relative",
  },

  imageWrapper: {
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    transition: "0.5s",
  },

  content: {
    padding: "18px",
  },

  desc: {
    fontSize: "14px",
    margin: "10px 0",
    color: "#cbd5f5",
  },

  tech: {
    fontSize: "13px",
    color: "#22c55e",
    marginBottom: "12px",
  },

  btn: {
    padding: "10px 18px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Projects;