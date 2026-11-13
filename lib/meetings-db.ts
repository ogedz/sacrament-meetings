import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1, date: '2026-05-03', meetingType: 'regular',
    presiding: 'Bishop Smith', conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' }, openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }], stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [{ name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' }],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' }, closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2, date: '2026-05-10', meetingType: 'testimony',
    presiding: 'Bishop Smith', conducting: 'Brother Jones',
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' }, openingPrayer: 'Brother Davis',
    wardBusiness: [], stakeBusiness: false,
    sacramentHymn: { number: 172, title: "Tis Sweet to Sing the Matchless Love" },
    speakers: [{ name: 'Ward Members', topic: 'Testimonies', type: 'speaker' }],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' }, closingPrayer: 'Sister Williams'
  },
  
  {
    id: 3, date: '2026-05-17', meetingType: 'regular',
    presiding: 'Bishop Smith', conducting: 'Brother Jones',
    openingHymn: { number: 10, title: 'I Believe in Christ' }, openingPrayer: 'Brother Davis',
    wardBusiness: [], stakeBusiness: false,
    sacramentHymn: { number: 190, title: "In Memory of the Crucified" },
    speakers: [{ name: 'Elder Smith', topic: 'Obedience', type: 'speaker' }],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' }, closingPrayer: 'Sister Williams'
  },
  {
    id: 4, date: '2026-05-24', meetingType: 'stake',
    presiding: 'Stake President', conducting: 'Stake Clerk',
    openingHymn: { number: 10, title: 'I Believe in Christ' }, openingPrayer: 'Brother Davis',
    wardBusiness: [], stakeBusiness: true,
    sacramentHymn: { number: 190, title: "In Memory of the Crucified" },
    speakers: [{ name: 'Stake President', topic: 'Faith', type: 'speaker' }],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' }, closingPrayer: 'Sister Williams'
  },
  {
    id: 5, date: '2026-05-31', meetingType: 'general',
    presiding: 'Bishop Smith', conducting: 'Brother Jones',
    openingHymn: { number: 10, title: 'I Believe in Christ' }, openingPrayer: 'Brother Davis',
    wardBusiness: [], stakeBusiness: false,
    sacramentHymn: { number: 190, title: "In Memory of the Crucified" },
    speakers: [{ name: 'General Authority', topic: 'Faith', type: 'speaker' }],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' }, closingPrayer: 'Sister Williams'
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}