'use client';

import Searchbar from '@/components/common/searchbar';
import Sidebar from '@/components/common/sidebar';
import Logo from '@/components/logo';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="fixed min-h-screen w-full">
      <div className="fixed z-20 grid h-16  w-full grid-cols-6 border-b border-input">
        <div className="col-span-1 flex items-center pl-6 ">
          <Logo />
        </div>
        <div className="col-span-5 flex items-center">
          <div className="container mx-auto px-20">
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex items-center">
                <Searchbar />
              </div>
              <div className="col-span-1  flex items-center justify-end gap-x-2">
                <ModeToggle />
                <div className="flex items-center">
                  <div>
                    <Image
                      width={45}
                      height={45}
                      src="/images/profile.jpg"
                      alt="Default avatar"
                      className="rounded-full border border-input"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-16 grid h-[calc(100vh-64px)] w-full grid-cols-6">
        <div className="col-span-1 border-r border-input">
          <Sidebar playlists={[]} />
        </div>
        <div className="col-span-5">
          <div className="container mx-auto px-20 outline">
            <div className="pt-4 outline">
              <div className="grid grid-cols-3 gap-x-10">
                <div className="col-span-2 h-80 rounded-lg outline"></div>
                <div className="col-span-1 rounded-lg outline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
