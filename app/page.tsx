"use client";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <header>
        <h1>Sendio Platform</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Find companies, workers and services instantly
        </p>
      </header>

      <section style={{ marginTop: "40px" }}>
        <h2>Our Services</h2>
        <p>
          We connect you with the best companies and professionals in the industry. 
          Use our search tool to find exactly what you need.
        </p>
      </section>

      <footer style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <p>&copy; 2026 Sendio Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
