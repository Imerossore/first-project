import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

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
        <div
          className="fb-customerchat"
          data-page-id="112689400917569"
          data-theme-color="#823613"
          data-logged-in-greeting="Hi! How can we help with your souvenir needs?"
          data-logged-out-greeting="Hi! Please log in to chat with us."
        />

        <Script id="facebook-sdk" strategy="lazyOnload">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    var chatbox = document.createElement('script');
    chatbox.setAttribute('src', 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js');
    chatbox.setAttribute('nonce', 'nonce');
    chatbox.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(chatbox);
    
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v19.0'
      });
    };
  `}
        </Script>
      </body>
    </html>
  );
}
