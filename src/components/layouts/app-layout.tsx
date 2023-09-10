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
      <div className="grid grid-cols-6">
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
        <div className="relative col-span-5">
          <Player />
          <main className="container mx-auto px-20">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
