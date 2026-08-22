import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Odyssey in English Hexameter",
  description: "A listening edition of an English retranslation of Homer’s Odyssey.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
