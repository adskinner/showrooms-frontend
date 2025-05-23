import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Showroom Edit",
  description: "Tech studio for multiline luxury interior showrooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bxe5tjx.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
