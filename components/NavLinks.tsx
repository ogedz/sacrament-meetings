'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  const links = [{ name: 'Home', href: '/' }, { name: 'Meetings', href: '/meetings' }];

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className={pathname === link.href ? 'font-bold text-blue-600' : 'text-gray-600'}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}