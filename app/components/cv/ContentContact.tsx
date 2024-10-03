'use client';
import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { RiMapPinAddFill } from 'react-icons/ri';
import { TbPhoneFilled } from 'react-icons/tb';
export const ContentContact = () => {
  return (
    <div className="mx-auto">
        <div className="p-8 text-black">
          <div className="mx-auto">
            <h1 className="mb-6 text-4xl font-bold">Work with me</h1>
            <p className="mb-4 text-lg">
              I&#39;m currently available for freelance work. I&#39;m also open to full-time opportunities.
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
          </div>
        </div>
    </div>
  );
};
