// import "./globals.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        <p>Admin Layout</p>
        {children}
      </body>
    </html>
  );
}
