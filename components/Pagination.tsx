'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex gap-4 items-center mt-6">
      {currentPage > 1 && <Link href={createPageURL(currentPage - 1)} className="text-blue-600 hover:underline">Previous</Link>}
      <span>Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages && <Link href={createPageURL(currentPage + 1)} className="text-blue-600 hover:underline">Next</Link>}
    </nav>
  );
}