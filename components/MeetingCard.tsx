import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white text-gray-900 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{meeting.date} - {meeting.meetingType}</h2>
        <p className="text-sm text-gray-600">Presiding: {meeting.presiding}</p>
      </div>
      <Link href={`/meetings/${meeting.id}`} className="bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
}