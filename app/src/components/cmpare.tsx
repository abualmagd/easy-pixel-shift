"use client";

const ComparisonSection = () => {
  const features = [
    {
      feature: "Processing Site",
      eps: "In-Browser (Client-Side)",
      fc: "Cloud Servers",
      cv: "Cloud Servers",
    },
    {
      feature: "Privacy & Security",
      eps: "Maximum (Files never uploaded)",
      fc: "High (SSL/Auto-delete)",
      cv: "High (Auto-delete)",
    },
    {
      feature: "Internet Usage",
      eps: "Minimal (App load only)",
      fc: "High (Upload/Download)",
      cv: "High (Upload/Download)",
    },
    {
      feature: "Pricing",
      eps: "100% Free",
      fc: "Free + Paid ($9.99+)",
      cv: "Free + Paid ($9.99+)",
    },
    {
      feature: "Speed",
      eps: "Instant (No upload queue)",
      fc: "Fast (Server dependent)",
      cv: "Fast (Server dependent)",
    },
    {
      feature: "File Size Limit",
      eps: "Device RAM Limited",
      fc: "Up to 1GB (Free)",
      cv: "Up to 100MB (Free)",
    },
    {
      feature: "Batch Processing",
      eps: "Yes (Multi-threaded)",
      fc: "Yes (Limited)",
      cv: "Yes (Limited)",
    },
    {
      feature: "Format Support",
      eps: "Massive (100+)",
      fc: "Massive (1,500+)",
      cv: "Massive (300+)",
    },
  ];

  return (
    <section className="lg:max-w-6xl max-w-full mx-auto px-4 py-12 font-sans text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="text-blue-600">EasyPixelShift</span> is Different
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {'Unlike others that rely on "Cloud Processing," EasyPixelShift uses'}
          <strong>{" Client-Side Processing"}</strong>. Your files never leave
          your computer, offering a massive edge in privacy and speed.
        </p>
      </div>

      {/* Comparison Table */}
      <div className=" w-full overflow-x-scroll shadow-xl rounded-xl border border-gray-100 mb-16">
        <table className="w-full text-left bg-white dark:bg-blue-300">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 font-bold text-blue-600">
                EasyPixelShift.com
              </th>
              <th className="p-4 font-semibold">FreeConvert.com</th>
              <th className="p-4 font-semibold">Convertio.io</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {features.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                <td className="p-4 font-medium text-gray-700">
                  {item.feature}
                </td>
                <td className="p-4 font-semibold text-blue-700">{item.eps}</td>
                <td className="p-4 text-gray-500">{item.fc}</td>
                <td className="p-4 text-gray-500">{item.cv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Killer Features (Cards) */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 w-full">
        <div className="p-6 bg-white dark:bg-gray-300 border border-gray-200 rounded-lg shadow-sm max-w-full">
          <div className="text-blue-600 text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2 ">Zero Latency</h3>
          <p className="text-gray-600">
            {
              "Don't wait for a 50MB upload. Conversion starts the millisecond you drop the file."
            }
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-300 border border-gray-200 rounded-lg shadow-sm max-w-full">
          <div className="text-blue-600 text-3xl mb-4">🌐</div>
          <h3 className="text-xl font-bold mb-2 ">Offline Capability</h3>
          <p className="text-gray-600">
            Once loaded, you can turn off your Wi-Fi and the converter keeps
            working perfectly.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-300 border border-gray-200 rounded-lg shadow-sm max-w-full">
          <div className="text-blue-600 text-3xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2 ">Data Sovereignty</h3>
          <p className="text-gray-600">
            {
              "Your sensitive documents and private photos never touch a server. 100% private."
            }
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-6">
          Our Local Processing Philosophy
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-400 mb-2">
              Technical Innovation
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {
                "By utilizing WebAssembly and the React ecosystem, we shift the heavy lifting from expensive servers directly to your browser hardware. This reduces our carbon footprint and increases your security."
              }
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue-400 mb-2">Transparency First</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {
                "We believe in a 'No-Upload' future. While cloud converters are great for massive archives, EasyPixelShift provides a faster, safer alternative for daily media tasks."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
