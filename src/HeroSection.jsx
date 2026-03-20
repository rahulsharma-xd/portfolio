import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";

function HeroSection() {

  const texts = ["FULL STACK DEVELOPER", "REACT DEVELOPER", "PROBLEM SOLVER"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    }
  }, [charIndex, index]);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.title}>Hi, I'm Rahul 👋</h1>

        {/* 👇 Typing animation */}
        <h2 style={styles.subtitle}>{text}|</h2>

        <p style={styles.desc}>
          I build modern and responsive web applications using React.
        </p>

        <button style={styles.btn} onClick={handleScroll}>
          View Projects
        </button>
      </div>

      <div style={styles.right}>
        <img src={heroImg} alt="hero" style={styles.img} />
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 40px",
    background: "#0f172a",
    color: "white",
    flexWrap: "wrap",
    marginTop: "70px",
  },
  left: {
    flex: 1,
    minWidth: "300px",
  },
  right: {
    flex: 1,
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
  },
  subtitle: {
    fontSize: "28px",
    color: "#38bdf8",
    margin: "10px 0",
  },
  desc: {
    color: "#cbd5f5",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  },
  img: {
    width: "300px",
  },
};

export default HeroSection;