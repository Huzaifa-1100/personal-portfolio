import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "@/components/main/starBackground";
import NavBar from "@/components/main/navBar";
import Footer from "@/components/main/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Huzaifa Ayub",
  description: "This is my Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#00021B] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
