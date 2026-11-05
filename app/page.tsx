import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-20 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Sacrament Meeting Planner</h1>
      <p className="mb-8">Plan and review meeting agendas easily.</p>
      <Link href="/meetings" className="bg-blue-600 text-white px-6 py-3 rounded text-lg">
        View Meetings
      </Link>
    </div>
  );
}