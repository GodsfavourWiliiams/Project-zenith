/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Hamburger, Notification, PlusIcon } from "./providerIcons";
import Link from "next/link";

type HeaderProps = {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}

const Index = (props: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white">
      <div className="flex flex-grow items-center justify-between px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-40 block lg:hidden">
            <Hamburger width={24} height={24} />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <img src='./Project Zenith.svg' alt='project zenith logo' />
          </Link>
        </div>

        <div className="flex items-center gap-3 text-white rounded-md py-3 px-5">
        
        </div>

        <div className="flex items-center gap-4 sm:gap-7">
          <div className="">
            <button className="flex items-center gap-2.5 rounded-md py-3 px-4 my-3 font-medium duration-300 ease-in-out hover:bg-[#F5F7F9]">
                   <Notification />
            </button>
          </div>
       
          <img
            alt="profile"
            src={"https://i.pravatar.cc/300"}
            className="mx-auto object-cover rounded-full h-10 w-10 cursor-pointer bg-gray-200"
          />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}

export default Index