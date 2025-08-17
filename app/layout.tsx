import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "NextBoolean — Training & Placements",
  description:
    "NextBoolean provides job-ready training in Java Full Stack, React, AWS/GCP, Salesforce, ServiceNow and more with 95% placement support."
};

export const viewport: Viewport = {
  themeColor: "#e9b949",
  colorScheme: "dark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
