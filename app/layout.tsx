import "./globals.css";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import type { Metadata } from "next"; 

// <-- Add the metadata block
export const metadata: Metadata = {
  title: "Ward Planner | Sacrament Meeting",
  description: "Plan, review, and print sacrament meeting agendas. Keep track of hymns, prayers, speakers, and ward business all in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
          <div className="container mx-auto max-w-6xl flex justify-between items-center">
            <Link href="/" className="text-xl font-extrabold text-blue-700 tracking-tight">
              Ward Planner
            </Link>
            <NavLinks />
          </div>
        </header>
        
        <main className="container mx-auto max-w-6xl p-4 flex-grow">
          {children}
        </main>
        
        <footer className="bg-white border-t border-gray-200 p-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Monday Ogedengbe | WDD 430
        </footer>
      </body>
    </html>
  );
}