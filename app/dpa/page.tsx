import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement, Easy pixel shift File converter",
  description:
    "Data Processing Agreement, Easy pixel shift File converter privacy policy",
};

const styles = {
  container: {
    lineHeight: "1.6",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  header: {
    color: "#2c3e50",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
  },
  subHeader: {
    color: "#34495e",
    marginTop: "30px",
  },
  highlightBox: {
    background: "#f8f9fa",
    borderLeft: "5px solid #007bff",
    padding: "20px",
    margin: "20px 0",
    borderRadius: "4px",
  },
  statusBadge: {
    display: "inline-block",
    background: "#28a745",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.9em",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "50px",
    fontSize: "0.8em",
    color: "#777",
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },
};
export default function Page() {
  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.header}>Data Processing Agreement</h1>
        <p>
          <strong>Last Updated:</strong> January 2026
        </p>
      </header>

      <section>
        <div style={styles.highlightBox}>
          <strong>The EasyPixelShift Promise:</strong> We believe your files are
          your business. Our conversion engine runs entirely in your web
          browser.
          <strong> Your files are never uploaded to our servers.</strong>
        </div>
      </section>

      <section>
        <h2 style={styles.subHeader}>1. Zero-Server Processing</h2>
        <p>
          Unlike traditional online converters, EasyPixelShift utilizes{" "}
          <strong>Client-Side Technology</strong> (WebAssembly/JavaScript). This
          means:
        </p>
        <ul>
          <li>
            <strong>No Uploads:</strong> When you {"open"} a file, it stays in
            your {"device's"} memory.
          </li>
          <li>
            <strong>Local Conversion:</strong> The mathematical process of
            shifting pixels happens locally on your CPU/GPU.
          </li>
          <li>
            <strong>Immediate Security:</strong> Since data is never transmitted
            to us, it cannot be intercepted, leaked, or sold.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={styles.subHeader}>2. No Account, No Tracking</h2>
        <p>To ensure total anonymity, EasyPixelShift does not require:</p>
        <ul>
          <li>Sign-ins or Registrations</li>
          <li>Email addresses or Personal Identities</li>
          <li>Credit card information (the service is 100% free)</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.subHeader}>3. Data Retention Policy</h2>
        <p>
          <span style={styles.statusBadge}>RETAINED: 0%</span>
        </p>
        <p>
          Because we do not host your files, we have nothing to store. Once you
          close your browser tab, all temporary data used for the conversion is
          wiped from your {"device's"} RAM (Random Access Memory).
        </p>
      </section>

      <section>
        <h2 style={styles.subHeader}>4. Browser Technologies Used</h2>
        <p>
          We use modern browser APIs to ensure speed and security. These may
          include:
        </p>
        <ul>
          <li>
            <strong>Canvas API:</strong> For image manipulation.
          </li>
          <li>
            <strong>Web Workers:</strong> To prevent your browser from freezing
            during large conversions.
          </li>
          <li>
            <strong>IndexedDB:</strong> Occasionally used for temporary cache,
            which remains strictly on your local machine.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={styles.subHeader}>5. Cookies & Analytics</h2>
        <p>
          We use minimal, privacy-focused analytics to understand traffic
          volume. These tools do not see your files and do not track you across
          other websites. You can opt-out at any time via your{" "}
          {'browser\'s "Do Not Track"'} settings.
        </p>
      </section>
    </div>
  );
}
