export const metadata = {
  title: "Cafeneaua Pieselor Auto",
  description: "Magazin piese auto cu cafenea integrată - Giurgiu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}