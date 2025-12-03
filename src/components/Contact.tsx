'use client';
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isMounted, setIsMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --------------------------------------------------------------
  //  NEW: submit handler – calls the API route
  // --------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Demo request saved to Google Sheets!');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to save');
      }
    } catch {
      toast.error('Network error – check your connection');
    } finally {
      setIsSending(false);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <Toaster position="top-center" />
      {/* --------------------------------------------------------------
         IMPORTANT: id="contact" + a little top-padding so the fixed navbar
         doesn’t hide the title when we scroll to it.
         -------------------------------------------------------------- */}
      <section id="contact" className="pt-24 pb-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-emerald-800 mb-12">
            Get in Touch
          </h2>

          {/* NEW: onSubmit */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              required
              placeholder="Message"
              rows={5}
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={isSending}
              className={`bg-emerald-600 text-white px-12 py-4 rounded-full font-bold transition-colors ${
                isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-700'
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-8 text-black">
            <p>bahaeddinehammou@ieee.org</p>
            <p className="mt-2">WhatsApp: +216 54 076 508</p>
          </div>
        </div>
      </section>
    </>
  );
}