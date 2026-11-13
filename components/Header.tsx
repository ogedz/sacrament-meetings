import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-white border-b p-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-900">Ward Planner</Link>
        <nav className="flex gap-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/meetings" className="text-gray-600 hover:text-blue-600">Meetings</Link>
        </nav>
      </div>
    </header>
  );
}