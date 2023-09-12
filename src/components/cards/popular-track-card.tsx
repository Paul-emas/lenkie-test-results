import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import MusicItem from '../ui/music-item';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useAppSelector } from '@/lib/redux/hooks';

const PopularTrackCard = () => {
  const { eminemPlaylists } = useAppSelector(state => state.track);

  return (
    <div className="relative rounded-lg border border-input bg-background px-5 py-3">
      <div className="text-lg font-bold">Top hits by eminem</div>
      <div className="text-sm font-light text-muted-foreground">Best from Eminem</div>
      <div className="group flex w-full items-center justify-between">
        <ScrollArea className="h-[218px] w-full py-4">
          <div className="group space-y-4">
            {eminemPlaylists?.map(data => <MusicItem key={data.id} data={data} tracks={eminemPlaylists} />)}
          </div>
        </ScrollArea>
        <div className="absolute -right-[84px] flex rotate-90 items-center text-sm font-light duration-300 group-hover:translate-y-5 group-hover:opacity-0">
          <div>Scroll to view more </div>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
      <Button className="mb-2 mt-2 w-full">View More</Button>
    </div>
  );
};

export default PopularTrackCard;
