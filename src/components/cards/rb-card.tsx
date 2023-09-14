import React from 'react';
import { Button } from '../ui/button';
import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/hooks';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

const RbCard = () => {
  const { play } = usePlayMedia();
  const { rbPlaylists } = useAppSelector(state => state.track);

  return (
    <div className="relative h-44 md:h-52">
      <div className="absolute bottom-3 z-10 w-full px-5 pb-2 md:bottom-0 md:px-6">
        <div className="flex items-center justify-between gap-x-6">
          <div className="text-xs font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis adipisicing elit.
          </div>
          <div>
            <Button
              onClick={() => play({ data: rbPlaylists[0], tracks: rbPlaylists })}
              title="Play R&B"
              size="icon"
              variant="outline"
            >
              <PlayIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Image
        src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-michael-jackson-7ecee2af-05f1-445b-aae3-4b828cc6bf0c.jpg"
        fill
        alt="profile image"
        className="rounded-sm bg-primary-foreground object-cover object-left-top"
      />
    </div>
  );
};

export default RbCard;
