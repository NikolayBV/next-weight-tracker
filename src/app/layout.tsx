import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <header>
      <h1 >Мой трекер веса</h1>
    </header>

    <main>
      {children}
    </main>

    <footer>
      © 2025 Николай — Все права защищены
    </footer>
    </body>
    </html>
  );
}
