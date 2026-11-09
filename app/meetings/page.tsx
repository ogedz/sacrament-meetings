import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default async function MeetingsList() {
  const meetings = getMeetings();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">All Meetings</h1>
        <p className="text-gray-500 mt-2">Browse past and upcoming sacrament meetings.</p>
      </div>
      <div className="grid gap-6">
        {meetings.map(m => <MeetingCard key={m.id} meeting={m} />)}
      </div>
    </div>
  );
}