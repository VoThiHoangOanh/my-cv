import {Inter} from 'next/font/google';
import React from 'react';
import {HeaderResume} from "@/app/components/cv/HeaderResume";
import {ContentNavbar} from "@/app/components/cv/ContentNavbar";
import './globals.css';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="w-full bg-white">
            <div className="mx-auto w-[850px] bg-white p-4 text-black">
                <HeaderResume/>
                <ContentNavbar/>
                <div >{children}</div>

            </div>
        </div>
        </body>
        </html>
    );
}
