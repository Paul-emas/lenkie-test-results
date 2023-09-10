import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import MusicItem from '../ui/music-item';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const PopularTrackCard = () => {
  return (
    <div className="relative rounded-lg border border-input bg-background px-5 py-3">
      <div className="text-lg font-bold">Popular Tracks</div>
      <div className="text-sm font-light text-muted-foreground">Listen to your trending artists</div>
      <div className="group flex w-full items-center justify-between">
        <ScrollArea className="h-[215px] w-full py-4">
          <div className="space-y-4">
            {[...Array(6)].map(id => (
              <MusicItem
                key={id}
                title="Maroon 5"
                caption="Maroon 5 Hello 2020"
                imageUrl="/images/profile.jpg"
                imageDesc="profile image"
              />
            ))}
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
