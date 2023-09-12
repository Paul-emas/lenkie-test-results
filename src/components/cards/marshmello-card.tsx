import React from 'react';
import { Button } from '../ui/button';
import { PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/hooks';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

const MarshmelloCard = () => {
  const { play } = usePlayMedia();
  const { marshmellowPlaylists } = useAppSelector(state => state.track);

  return (
    <div className="relative h-72">
      <div className="absolute bottom-7 z-10 w-full px-6">
        <div className="">
          <div className="font-bold text-white">
            <span className="text-3xl font-light">
              Best EDM by <br />{' '}
            </span>
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-600 bg-clip-text text-4xl text-transparent">
              Marshmello
            </span>
          </div>
          <Button
            onClick={() => play({ data: marshmellowPlaylists[0], tracks: marshmellowPlaylists })}
            title="Listen now"
            size="lg"
            variant="outline"
            className="mt-6 h-12 font-bold uppercase"
          >
            <PlayCircleIcon className="mr-2" />
            <span>Listen now</span>
          </Button>
        </div>
      </div>
      <Image
        src="https://w0.peakpx.com/wallpaper/234/157/HD-wallpaper-marshmello-music-producer-dubstep-artwork-others.jpg"
        fill
        alt="profile image"
        className="rounded-sm bg-primary-foreground object-cover object-left-top"
      />
    </div>
  );
};

export default MarshmelloCard;
