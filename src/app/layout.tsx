import './globals.css';

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
        {/* Optional: Favicon (if you added it) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}