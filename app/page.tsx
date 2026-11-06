import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center text-gray-900">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-blue-700">
        Sacrament Meeting Planner
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Plan, review, and print meeting agendas for your ward or branch. Keep track of hymns, prayers, speakers, and ward business all in one place.
      </p>
      <Link 
        href="/meetings" 
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
      >
        View Meetings
      </Link>
    </div>
  );
}