import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/SiteContext/SiteProvider";
import { BargerMenu } from "@/components/Bargermenu/BargerMenu"

import "@/css/style.css";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";


export const metadata: Metadata = {
  title: "Dream Home Construction Ltd UK",
  description: "We build your dreams with passion",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      <head>
       {/* Google Fonts via <link> tags */}
       <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet" />
     
      </head>
      <body >
        <SiteProvider>
        <BargerMenu />
 <div className="w-full mx-auto bg-gray-100 text-gray-900 ">
         <Header />
              <HeroSection />
        {children}
 <Footer />
 <FooterBottom />
        </div>
        </SiteProvider>
      </body>
    </html>
  );
}
