import React from 'react';
import Topnav from '../common/topnav';
import Sidebar from '../common/sidebar';
import Player from '../player';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Topnav />
      <div className="flex w-full">
        <Sidebar
          playlists={[
            'Recently Added',
            'Recently Played',
            'Top Songs',
            'Top Albums',
            'Top Artists',
            'Logic Discography',
            'Bedtime Beats',
            'Feeling Happy',
            'I miss Y2K Pop',
            'Runtober',
            'Mellow Days',
            'Eminem Essentials'
          ]}
        />
        <div className="relative w-[calc(100%-250px)]">
          <Player />
          <main className="container mx-auto px-20 2xl:px-36">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
