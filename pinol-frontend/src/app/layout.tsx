import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinol Dashboard",
  description:
    "Pinol Dashboard, a friendly portal to manage your customer services",
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
