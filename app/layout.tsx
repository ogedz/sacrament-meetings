import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ward Planner | Sacrament Meeting",
  description: "Plan, review, and print sacrament meeting agendas. Keep track of hymns, prayers, speakers, and ward business all in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="container mx-auto max-w-6xl p-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}