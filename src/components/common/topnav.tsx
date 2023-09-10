import React from 'react';
import Logo from '../logo';
import Searchbar from './searchbar';
import { ModeToggle } from '../mode-toggle';
import Image from 'next/image';

const Topnav = () => {
  return (
    <header className="sticky top-0 z-20 grid h-16 w-full grid-cols-6 border-b border-input bg-background">
      <div className="col-span-1 flex items-center pl-6">
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
    </header>
  );
};

export default Topnav;
