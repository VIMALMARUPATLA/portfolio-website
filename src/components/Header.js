import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#333",
    color: "white",
  },
};

export default Header;
