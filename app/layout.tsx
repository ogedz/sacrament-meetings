import "./globals.css";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white border-b p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">Ward Planner</Link>
            <NavLinks />
          </div>
        </header>
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
          &copy; 2026 Monday Ogedengbe
        </footer>
      </body>
    </html>
  );
}