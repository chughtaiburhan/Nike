import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Page from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nike Web",
  description: "Nike Website ",
};

export default function RootLayout( ) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Page/>
      </body>
    </html>
  );
}
