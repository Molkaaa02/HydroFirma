export default function Features() {
  const feats = [
    "90% Water Reduction",
    "AI Health Monitoring",
    "100% Solar Powered",
    "Real-Time Dashboard",
    "Offline First",
    "Year-Round Harvest"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Built for the Future
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {feats.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-emerald-700">{f}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}