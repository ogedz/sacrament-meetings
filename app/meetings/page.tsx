import MeetingCard from '@/components/MeetingCard';

export default async function MeetingsList() {
  // Fetching from the API route as requested by Daniel
  const res = await fetch('http://localhost:3000/api/meetings', { cache: 'no-store' });
  const meetings = await res.json();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">All Meetings</h1>
        <p className="text-gray-500 mt-2">Browse past and upcoming sacrament meetings.</p>
      </div>
      <div className="grid gap-6">
        {meetings.map((m: any) => <MeetingCard key={m.id} meeting={m} />)}
      </div>
    </div>
  ); 
}