import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "./components/Footer";






const googlesansflex = localFont({
  src: [
    {
      path: "../public/font/GoogleSansFlex_24pt-Medium.ttf",
      weight: "400",
      style: "normal",
      
    },
    {
      path: "../public/font/GoogleSansFlex_36pt-Bold.ttf",
      weight: "700",
      style: "normal",
     
    },
   
  ],
  variable: "--font-googlesansflex",
});

export const metadata: Metadata = {
  title: "CELTM",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googlesansflex.variable} antialiased`}
      >
        {children}
      </body>
  
    </html>
  );
}
