import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nakul — Creative Developer",
  description:
    "Nakul is a creative developer building thoughtful websites, interfaces, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}