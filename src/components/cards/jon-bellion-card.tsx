import React from 'react';
import { Button } from '../ui/button';
import { PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/hooks';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

const JonBellionCard = () => {
  const { play } = usePlayMedia();
  const { jobBellionPlaylists } = useAppSelector(state => state.track);

  return (
    <div className="relative h-52 rounded-sm">
      <div className="absolute bottom-7 z-10 w-full px-6">
        <div className="">
          <div className="font-bold text-white">
            <span className="text-2xl font-light">Epic hits</span>
            <br />
            <span className="text-3xl text-gray-100">Jon Bellion</span>
          </div>
          <Button
            onClick={() => play({ data: jobBellionPlaylists[0], tracks: jobBellionPlaylists })}
            title="Listen now"
            variant="outline"
            className="mt-6 h-12 px-5 font-bold uppercase"
          >
            <PlayCircleIcon className="mr-2" />
            <span>Listen now</span>
          </Button>
        </div>
      </div>
      <Image
        src="https://brethebobcat.files.wordpress.com/2020/10/c726b6b3-21ab-4b0a-ac23-420bb117c299.sized-1000x1000-1.jpg"
        fill
        alt="profile image"
        className="rounded-sm bg-primary-foreground object-cover object-left-top"
      />
    </div>
  );
};

export default JonBellionCard;
