'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabNav = [
  {
    id: 1,
    content: 'Home',
    href: '/',
  },
  {
    id: 2,
    content: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    content: 'CV',
    href: '/resume',
  },
  {
    id: 4,
    content: 'Contact',
    href: '/contact',
  },
];

export const ContentNavbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col items-center gap-6 border-b border-t border-black py-4 text-lg">
        <div className="flex space-x-4">
          {TabNav.map((tab) => (

            <Link key={tab.id} href={tab.href}>
              <span

                className={`rounded-md px-4 py-2 text-xl font-medium ${pathname === tab.href ? 'bg-black text-white' : 'text-black'} hover:bg-gray-200`}
              >

                {tab.content}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
