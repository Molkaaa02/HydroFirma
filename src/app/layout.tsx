import './globals.css';
import FloatingDecorations from '@/components/FloatingDecorations';   // ← NEW LINE

export const metadata = {
  title: 'HydroFirma',
  description: 'AI-Powered Hydroponics for Water-Scarcity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative min-h-screen bg-gray-50">
        {/* This makes tomatoes, water drops & leaves float on every page */}
        <FloatingDecorations />
        {children}
      </body>
    </html>
  );
}
