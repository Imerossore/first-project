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
        <div className="fixed bottom-4 right-4 z-50">
          <iframe
            src="https://www.facebook.com/plugins/customerchat.php?page_id=112689400917569&theme_color=%23823613&logged_in_greeting=Hi%21%20How%20can%20we%20help%20with%20your%20souvenir%20needs%3F&logged_out_greeting=Hi%21%20Please%20log%20in%20to%20chat%20with%20us."
            width="80"
            height="80"
            className="border-0"
            allow="encrypted-media"
          />
        </div>
      </body>
    </html>
  );
}
