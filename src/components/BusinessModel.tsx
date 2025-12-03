export default function BusinessModel() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Business Model
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-black mb-4">Hardware</h3>
            <p className="text-black mb-4">One-time purchase</p>
            <ul className="space-y-2 text-sm">
              <li className="text-black">Starter: 270$</li>
              <li className="text-black">Pro: Custom</li>
              <li className="text-black">Enterprise: Custom</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-black mb-4">Subscription</h3>
            <p className="text-black mb-4">AI + Updates</p>
            <ul className="space-y-2 text-sm text-black">
              <li>Basic Monitoring Tier: $10/mo</li>
              <li>Advanced Tier: $20/mo</li>
              <li>HydroFirma Kit: $270</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}