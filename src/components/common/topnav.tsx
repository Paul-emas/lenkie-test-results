import React from 'react';
import Logo from '../logo';
import Searchbar from './searchbar';
import { ModeToggle } from '../mode-toggle';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { MenuIcon, SearchIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { handleOpenSearch, handleOpenSidebar } from '@/lib/redux/slices/playerSlice';

const Topnav = () => {
  const dispatch = useAppDispatch();
  const { openSearch } = useAppSelector(state => state.player);

  const openSearchBar = () => dispatch(handleOpenSearch(true));

  const openSidebar = () => dispatch(handleOpenSidebar(true));

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center border-b border-input bg-background">
      <div className="flex items-center pl-4 xl:w-[250px] xl:pl-6">
        <div className="block md:hidden">
          <Button onClick={openSidebar} variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="scale-[0.85] xl:scale-100">
          <Logo />
        </div>
      </div>
      <div className="flex w-full items-center xl:w-[calc(100%-250px)]">
        <div className="container mx-auto px-4 xl:px-20 2xl:px-36">
          <div className="grid xl:grid-cols-2">
            <div className="col-span-1">
              <div className="hidden items-center xl:flex">
                <Searchbar />
              </div>
              {openSearch ? (
                <div className="fixed h-16 inset-0 z-50 block px-4 py-2 xl:hidden outline-white">
                  <Searchbar />
                </div>
              ) : null}
            </div>
            <div className="col-span-1 flex items-center justify-end gap-x-2 md:gap-x-3 2xl:absolute 2xl:right-6">
              <div className="block xl:hidden">
                <Button onClick={openSearchBar} variant="ghost" size="icon">
                  <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </div>
              <div className="hidden xl:block">
                <ModeToggle />
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topnav;
