import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBoolean — Job‑Ready EdTech Cohorts",
  description:
    "NextBoolean offers instructor‑led cohorts (Java Full Stack, React, AWS, GCP, BA, Salesforce, ServiceNow) with live sessions, recordings, hands‑on labs and 95% placements.",
  openGraph: {
    title: "NextBoolean — Job‑Ready EdTech Cohorts",
    description:
      "Cohort‑based courses with live sessions, recordings, coding labs and placement support. 6–12 week programs.",
    type: "website",
    url: "https://nextboolean.com/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
