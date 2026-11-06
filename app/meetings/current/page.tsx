import { redirect } from 'next/navigation';
import { connection } from 'next/server'; // Import connection
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeeting() {
  // 1. This tells Next.js to wait until runtime (not build time) to evaluate the date
  await connection(); 

  // 2. Get today's date and find the most recent Sunday
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const sundayString = sunday.toISOString().split('T')[0];

  // 3. Find the meeting for that Sunday
  const meetings = getMeetings(sundayString);
  
  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}