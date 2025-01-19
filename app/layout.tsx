import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";


const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JussySol",
  description: "PLAYER PUMP PLAYER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistSans.className}
      >
        {children}
      </body>
    </html>
  );
}
