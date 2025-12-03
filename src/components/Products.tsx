import { Droplets, Brain, Sun, WifiOff } from 'lucide-react';

export default function Products() {
  const items = [
    { icon: Droplets, title: "IoT Sensors", desc: "pH, EC, temp, humidity" },
    { icon: Brain, title: "AI Pest Detection", desc: "Early threat ID" },
    { icon: Sun, title: "Solar-Powered", desc: "Off-grid ready" },
    { icon: WifiOff, title: "Offline Mode", desc: "Sync when online" },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Integrated System
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center p-6 bg-emerald-50 rounded-2xl">
              <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-black">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}