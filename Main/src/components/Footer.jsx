import * as React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Mobileytics Analyzer. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem 0",
    textAlign: "center",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    marginTop: "auto",
    backgroundColor: "var(--card-bg)",
    color: "var(--desc-color)",
  },
  text: {
    fontSize: "0.9rem",
    margin: 0,
  },
};
