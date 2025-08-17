import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nextboolean — Demo UI",
  description: "Inline demo packaged as a Next.js 14 + Tailwind app."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
