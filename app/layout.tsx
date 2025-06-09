import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diday's Souvenir Shop | Custom Souvenirs for All Occasions",
  description:
    "Unique and affordable custom souvenirs, personalized mugs, succulents, and gifts for weddings, birthdays, christenings, and all special occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="fb-root"></div>
        <Header />
        <main className="min-h-screen flex flex-col bg-[#fafafa]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
