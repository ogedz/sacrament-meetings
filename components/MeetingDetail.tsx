import type { SacramentMeeting } from '@/lib/types';

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="bg-white p-6 rounded shadow text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Sacrament Meeting - {meeting.date}</h1>
      <p><strong>Type:</strong> {meeting.meetingType}</p>
      <p><strong>Presiding:</strong> {meeting.presiding}</p>
      <p><strong>Conducting:</strong> {meeting.conducting}</p>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Agenda</h3>
        <p>Opening Hymn: #{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
        <p>Opening Prayer: {meeting.openingPrayer}</p>
        <p>Sacrament Hymn: #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
        
        <h4 className="mt-2 font-semibold">Speakers & Musical Numbers</h4>
        <ul className="list-disc pl-5">
          {meeting.speakers.map((s, i) => (
            <li key={i}>{s.name} - {s.topic} ({s.type})</li>
          ))}
        </ul>
        
        <p className="mt-2">Closing Hymn: #{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
        <p>Closing Prayer: {meeting.closingPrayer}</p>
      </div>
    </div>
  );
}