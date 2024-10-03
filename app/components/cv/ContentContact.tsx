'use client';
import { CiClock2 } from 'react-icons/ci';
import { SiGooglemeet } from 'react-icons/si';
import { IoEarthSharp } from 'react-icons/io5';
import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { RiMapPinAddFill } from 'react-icons/ri';
import { TbPhoneFilled } from 'react-icons/tb';
import User from './img/Shape.png';
import { Calendar } from "@/components/ui/calendar"

export const ContentContact = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = React.useState(false);

  return (
    <div className="mx-auto h-screen">
      {!showCalendar ? (
        <div className="p-8 text-black">
          <div className="mx-auto">
            <h1 className="mb-6 text-4xl font-bold">Work with me</h1>
            <p className="mb-4 text-lg">
              I'm currently available for freelance work. I'm also open to full-time opportunities.
            </p>
            <div className="mb-6 text-lg">
              <p className="mb-2">You can reach out to me at:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <IoIosMail fontSize={30} />
                  <a
                    href="mailto:vothihoangoanh889@gmail.com"
                    className="hover:text-blue-700"
                    target="_blank"
                  >
                    vothihoangoanh889@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <RiMapPinAddFill fontSize={30} />
                  <span className="hover:text-blue-700">Tan Binh, TP HCM.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TbPhoneFilled fontSize={30} />
                  <a className="hover:text-blue-700" href="tel:0393051524">
                    0393051524
                  </a>
                </div>
              </div>
              <p className="mt-4">or by using the form below.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Write your name"
                  className="mb-2 rounded-lg border border-gray-300 bg-gray-800 p-2 text-white"
                />
                <input
                  type="email"
                  placeholder="Write Your Email"
                  className="mb-2 rounded-lg border border-gray-300 bg-gray-800 p-2 text-white"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Write Your Subject"
                  className="mb-2 rounded-lg border border-gray-300 bg-gray-800 p-2 text-white"
                />
                <textarea
                  placeholder="Write Your Message"
                  className="mb-2 rounded-lg border border-gray-300 bg-gray-800 p-2 text-white placeholder-gray-400"
                  // rows="4"
                ></textarea>
              </div>
              <button className="w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-700">
                Submit
              </button>
            </form>
            <p className="mb-4 mt-8 text-lg">
              If you're interested in working with me, please schedule a meeting with me using the
              calendar below.
            </p>
            <button
              onClick={() => {
                setShowCalendar(true);
              }}
              className="bg-gray-800 p-2 text-white hover:bg-gray-700"
            >
              Book a Call
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr,1fr] gap-4 bg-neutral-800 p-4 text-white">
          <div className="p-4 ">
            <div className="mb-2">
              <img src={User.src} alt="Profile" className="mr-3 h-10 w-10 rounded-full" />
              <div>
                <h2 className="mt-2 text-sm font-semibold">Hoang Oanh</h2>
                <h3 className="text-xl font-bold">15 Min Meeting</h3>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2 text-white">
              <CiClock2 />
              <span>15m</span>
            </div>
            <div className="mb-2 flex items-center gap-2 text-white">
              <SiGooglemeet />
              <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <IoEarthSharp />
              <span>Asia/Bangkok</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};
