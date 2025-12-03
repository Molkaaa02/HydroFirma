'use client';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Thank you! We received your message – we\'ll contact you very soon');
      setName('');
      setEmail('');
      setMessage('');
      setSending(false);
    }, 800);
  };

  return (
    <>
      <Toaster position="top-center" />
      <section id="contact" className="pt-24 pb-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-emerald-800 mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <input required type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input required type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea required placeholder="Message" rows={5} value={message} onChange={e => setMessage(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" />
            <button type="submit" disabled={sending}
              className="bg-emerald-600 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-700 disabled:opacity-70">
              {sending ? 'Sending...' : 'Send Message'}
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
