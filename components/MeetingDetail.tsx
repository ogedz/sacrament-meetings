import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="group border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {meeting.meetingType}
          </span>
          <span className="text-gray-500 text-sm font-medium">{meeting.date}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {meeting.presiding}
        </h2>
        <p className="text-gray-600 text-sm">
          Conducting: {meeting.conducting}
        </p>
      </div>
      
      <Link 
        href={`/meetings/${meeting.id}`} 
        className="w-full sm:w-auto text-center bg-gray-50 group-hover:bg-blue-600 group-hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors border border-gray-200 group-hover:border-blue-600"
      >
        View Agenda →
      </Link>
    </div>
  );
}