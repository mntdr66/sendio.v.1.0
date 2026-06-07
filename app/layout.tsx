import "./globals.css";

export const metadata = {
  title: "Sendio",
  description: "Premium Services Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
