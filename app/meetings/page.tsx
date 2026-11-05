import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default async function MeetingsList() {
  const meetings = getMeetings();

  return (
    <div className="text-gray-900">
      <h1 className="text-3xl font-bold mb-6">All Meetings</h1>
      <div className="grid gap-4">
        {meetings.map(m => <MeetingCard key={m.id} meeting={m} />)}
      </div>
    </div>
  );
}