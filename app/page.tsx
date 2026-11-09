import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="max-w-3xl">
        <p className="text-blue-600 font-bold tracking-widest uppercase mb-4">
          Ward Planner
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Simplify Your <span className="text-blue-600">Sacrament Meeting</span> Planning
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Organize agendas, track hymns and speakers, and print programs effortlessly. Everything your bishopric needs in one clean dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/meetings" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View All Meetings
          </Link>
          <Link href="/meetings/current" className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Current Meeting
          </Link>
        </div>
      </div>
    </div>
  );
}