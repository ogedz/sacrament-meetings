'use client';

import type { SacramentMeeting } from '@/lib/types';

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <article className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm print:border-0 print:shadow-none text-gray-900">
      <div className="text-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Sacrament Meeting</h1>
        <p className="text-gray-600">{meeting.date} | {meeting.meetingType}</p>
        <p><strong>Presiding:</strong> {meeting.presiding} | <strong>Conducting:</strong> {meeting.conducting}</p>
      </div>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold border-b mb-2">Announcements</h2>
          <ul className="list-disc pl-5">{meeting.announcements.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
      )}

      <div className="space-y-4 mb-6">
        <p><strong>Opening Hymn:</strong> {meeting.openingHymn.number}. {meeting.openingHymn.title}</p>
        <p><strong>Opening Prayer:</strong> {meeting.openingPrayer}</p>
        
        {meeting.wardBusiness.length > 0 && (
          <div>
            <strong>Ward Business:</strong>
            <ul className="list-disc pl-5">{meeting.wardBusiness.map((b, i) => <li key={i}>{b.description}</li>)}</ul>
          </div>
        )}
        
        <p><strong>Sacrament Hymn:</strong> {meeting.sacramentHymn.number}. {meeting.sacramentHymn.title}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold border-b mb-2">Speakers & Musical Numbers</h2>
        <ul className="list-disc pl-5 space-y-2">
          {meeting.speakers.map((s, i) => (
            <li key={i}>
              <strong>{s.name}</strong> 
              {s.topic && <span> - {s.topic}</span>} 
              {s.type === 'musical-number' && <em> (Musical Number)</em>}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <p><strong>Closing Hymn:</strong> {meeting.closingHymn.number}. {meeting.closingHymn.title}</p>
        <p><strong>Closing Prayer:</strong> {meeting.closingPrayer}</p>
      </div>

      <div className="mt-8 text-center print:hidden">
        <button onClick={() => window.print()} className="rounded bg-blue-700 px-6 py-2 text-white hover:bg-blue-800">
          Print Program
        </button>
      </div>
    </article>
  );
}