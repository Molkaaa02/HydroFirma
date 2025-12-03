export default function Impact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Market Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600">2.4B</div>
            <p className="text-black">People facing water scarcity by 2050 (UN)</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600">$15T</div>
            <p className="text-black">Agriculture 4.0 market by 2030</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600">30%</div>
            <p className="text-black">Increase in resilient farms needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}