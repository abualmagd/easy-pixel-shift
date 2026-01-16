export function DataSecure() {
  const styles = {
    highlightBox: {
      borderLeft: "5px solid #007bff",
      padding: "20px",
      margin: "20px 0",
      borderRadius: "4px",
    },
    subHeader: {
      marginTop: "30px",
    },
  };
  return (
    <div className="data-container mt-10 p-5 shadow">
      <h2 className=" capitalize font-bold text-3xl">
        {" "}
        Your data are completely secure{" "}
      </h2>
      <div
        style={styles.highlightBox}
        className=" bg-[#f8f9fa] dark:bg-blue-950 dark:text-gray-300"
      >
        <strong>The EasyPixelShift Promise:</strong> We believe your files are
        your business. Our conversion engine runs entirely in your web browser.
        <strong> Your files are never uploaded to our servers.</strong>
      </div>
      <section className=" text-[#34495e] dark:text-white">
        <h2 style={styles.subHeader}> Zero-Server Processing</h2>
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
    </div>
  );
}
