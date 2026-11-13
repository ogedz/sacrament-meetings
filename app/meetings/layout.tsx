export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4">
      <div className="bg-blue-50 p-4 rounded mb-6 text-blue-900">
        <strong>Meetings Section:</strong> Use the menu to browse all meetings.
      </div>
      {children}
    </div>
  );
}