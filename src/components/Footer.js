import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#333",
    color: "white",
  },
};

export default Footer;
