import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import DeskNavbar from "./components/DeskNavbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D3 – Interfaces. Branding. Development",
  description:
    "We solve business issues at different levels of communication. We believe that a wonderful interface is impossible without branding, and branding is impossible without a deep understanding of interface design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DeskNavbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
