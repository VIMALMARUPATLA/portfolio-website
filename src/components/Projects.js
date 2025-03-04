import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2>Projects</h2>
      <ul>
        <li>Project 1 - A cool React project</li>
        <li>Project 2 - A Java-based web app</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Projects;
