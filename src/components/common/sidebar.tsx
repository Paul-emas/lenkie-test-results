import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import Link from 'next/link';
import Logo from '../logo';
import { handleOpenSidebar } from '@/lib/redux/slices/playerSlice';
import { XIcon } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: string[];
}

const Sidebar = ({ className, playlists }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.track);
  const { currentTrack, openSidebar } = useAppSelector(state => state.player);

  const closeSidebar = () => dispatch(handleOpenSidebar(false));

  return (
    <aside
      className={`${
        openSidebar ? 'visible' : 'invisible xl:visible'
      } fixed top-0 z-50 md:z-40 h-screen w-full overflow-hidden xl:sticky xl:top-16 xl:w-auto`}
    >
      <div
        onClick={closeSidebar}
        className={`${
          openSidebar ? 'visible block opacity-100' : 'invisible hidden opacity-0'
        } absolute -z-10 block h-full w-full bg-black bg-opacity-25 backdrop-blur-md dark:backdrop-blur-sm xl:hidden`}
      ></div>
      <div
        className={`${
          !openSidebar ? '-translate-x-full xl:-translate-x-0' : '-translate-x-0 xl:-translate-x-0'
        } smooth-transition w-[230px] xl:w-[250px]`}
      >
        <div
          className={cn(
            `${
              currentTrack ? 'h-full xl:h-[calc(100vh-140px)]' : 'h-screen'
            } z-50 border-input bg-background duration-0 xl:border-r xl:pb-12`,
            className
          )}
        >
          <ScrollArea className="h-[calc(100%-10px)] xl:h-auto">
            <div className="flex items-center gap-x-2 pl-6 pt-4 xl:hidden">
              <div>
                <ModeToggle />
                {/* <Button onClick={closeSidebar} size="icon" variant="outline">
                  <XIcon className="h-6 w-6" />
                </Button> */}
              </div>
              <div>
                <Logo />
              </div>
            </div>
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
                <div className="space-y-1">
                  <Link href="/">
                    <Button disabled={loading} variant="secondary" className="w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                      Home
                    </Button>
                  </Link>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    Browse
                  </Button>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>
                    Radio
                  </Button>
                </div>
              </div>
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
                <div className="space-y-1">
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15V6" />
                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                    </svg>
                    Playlists
                  </Button>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <circle cx="8" cy="18" r="4" />
                      <path d="M12 18V2l7 4" />
                    </svg>
                    Songs
                  </Button>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Made for You
                  </Button>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                    Artists
                  </Button>
                  <Button disabled={loading} variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m16 6 4 14" />
                      <path d="M12 6v14" />
                      <path d="M8 8v12" />
                      <path d="M4 4v16" />
                    </svg>
                    Albums
                  </Button>
                </div>
              </div>
              <div className="py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>
                <ScrollArea className="h-[182px] px-1">
                  <div className="space-y-1 p-2">
                    {playlists?.map((playlist, i) => (
                      <Button
                        disabled={loading}
                        key={`${playlist}-${i}`}
                        variant="ghost"
                        className="w-full justify-start font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-4 w-4"
                        >
                          <path d="M21 15V6" />
                          <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="M12 12H3" />
                          <path d="M16 6H3" />
                          <path d="M12 18H3" />
                        </svg>
                        {playlist}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
