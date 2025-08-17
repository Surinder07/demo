export const viewport = {
  themeColor: "#0ea5e9",
};

export const metadata = {
  title: "NextBoolean — Job-Ready EdTech",
  description: "Live cohorts, recordings, hands-on labs and 95% placements.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen nb-bg nb-text antialiased">{children}</body>
    </html>
  );
}
