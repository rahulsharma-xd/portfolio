function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Rahul</h2>

      <ul style={styles.menu}>
        <li
          style={styles.item}
          onClick={() => scrollToSection("home")}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </li>

        <li
          style={styles.item}
          onClick={() => scrollToSection("about")}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          About
        </li>

        {/* ✅ Skills add kiya */}
        <li
          style={styles.item}
          onClick={() => scrollToSection("skills")}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Skills
        </li>

        <li
          style={styles.item}
          onClick={() => scrollToSection("projects")}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Projects
        </li>

        {/* ✅ Contact fix */}
        <li
          style={styles.item}
          onClick={() => scrollToSection("contact")}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#020617",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "border-box",
    zIndex: 1000,
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  item: {
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Navbar;