import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      {/* Optimized Image */}
      <Image 
        src="/church.webp" 
        alt="Sacrament meeting chapel" 
        width={600} 
        height={400} 
        className="rounded-xl shadow-lg mb-8 object-cover"
        priority
      />
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Ward Planner
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        A simple place to organize sacrament meeting programs and help members view upcoming and past meetings.
      </p>
      
      <div className="flex gap-4">
        <Link href="/meetings" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          View All Meetings
        </Link>
      </div>
    </div>
  );
}