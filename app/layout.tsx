import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CCSZ — Zorgcoöperatie voor cultuursensitieve zorg",
  description:
    "CCSZ is een zorgcoöperatie voor cultuursensitieve zorg. Samen sterker: aanbestedingen winnen, schaalvoordelen benutten en kwaliteit borgen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-neutral-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
