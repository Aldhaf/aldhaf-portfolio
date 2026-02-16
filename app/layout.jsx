import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Konfigurasi Font Utama (Tech/Coding Vibe)
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-mono",
});

// Konfigurasi Font Judul (Modern/Geometric)
const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
});

export const metadata = {
  title: "Aldhaf Portfolio",
  description: "IT Infrastructure & Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Masukkan variable ke body */}
      <body className={`${ibmMono.variable} ${ibmSans.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}