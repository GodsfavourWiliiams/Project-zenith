import React from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';
import Image from 'next/image';
import {
  TaskIcon,
  TeamIcon,
  CalenderIcon,
  HomeIcon,
  SettingsIcon,
  LogoutIcon,
  CloseIcon,
} from './providerIcons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const route = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: HomeIcon,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    icon: TaskIcon,
  },
  {
    path: '/calender',
    name: 'Calender',
    icon: CalenderIcon,
  },
  {
    path: '/team',
    name: 'Team',
    icon: TeamIcon,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: SettingsIcon,
  },
];

const Index = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const router = useRouter();
  const pathname = router.pathname;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <aside
      ref={sidebar}
      className={`shahow-sm absolute left-0 top-0 z-50 flex h-screen w-[280px] flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='py-5.5 lg:py-6.5 mt-5 flex items-center justify-between gap-2 px-6'>
        <Link href='/'>
          <Image
            src='./Project Zenith.svg'
            alt='project zenith logo'
            unoptimized
            width={0}
            height={0}
            className='w-full '
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block cursor-pointer lg:hidden'
        >
          <CloseIcon />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-0 px-4 py-4 lg:mt-4 lg:px-6'>
          {/* <!-- Menu Group --> */}
          <div>
            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                {/* icon: React.JSX.IntrinsicAttributes;  */}
                {route.map(
                  (
                    item: {
                      path: string | UrlObject;
                      icon: any;
                      name: string
                    },
                    index: React.Key
                  ) => (
                    <Link
                      href={item.path}
                      key={index}
                      className={`group relative my-3 flex items-center gap-2.5 rounded-md px-4 py-3 font-medium duration-300 ease-in-out hover:bg-[#F5F7F9] ${
                        pathname === item.path ? 'bg-[#F5F7F9] text-[#292D32]' : 'text-[#89898A]'
                      }`}
                    >
                      <item.icon
                        width={20}
                        height={20}
                        color={pathname === item.path ? 'black' : '#83879B'}
                      />
                      {item.name}
                    </Link>
                  )
                )}
              </li>
            </ul>
          </div>

          {/* <!-- SideBar Footer --> */}
          <div className='absolute bottom-0'>
            <ul className='mb-6 flex flex-col items-center w-full gap-1.5'>
              <li>
                <button
                  className={`my-3 flex items-center gap-2.5 rounded-md px-4 py-3 font-medium duration-300 ease-in-out hover:bg-[#F5F7F9]`}
                >
                  <LogoutIcon height={20} width={20} />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Index;
