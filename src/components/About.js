import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p>Hello! I am a passionate developer with experience in React and web technologies.</p>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
  },
};

export default About;
