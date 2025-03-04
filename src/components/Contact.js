import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact</h2>
      <p>Email: myemail@example.com</p>
      <p>GitHub: github.com/myusername</p>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Contact;
