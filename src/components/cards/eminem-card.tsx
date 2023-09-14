import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { PlayCircleIcon, PlusIcon } from 'lucide-react';
import { useAppSelector } from '@/lib/redux/hooks';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

const EminemWrldCard = () => {
  const { eminemPlaylists } = useAppSelector(state => state.track);
  const { play } = usePlayMedia();

  return (
    <div className="col-span-2 mt-3 hidden h-80 items-center justify-center rounded-lg border border-input bg-gradient-to-br from-primary-foreground via-primary-foreground to-gray-200 p-5 dark:to-gray-800 xl:flex">
      <div className="h-64 w-64 rounded-full">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={eminemPlaylists[0]?.artist.picture_big || ''}
            fill
            alt="profile image"
            className="rounded-full bg-primary-foreground object-cover object-left-top"
          />
        </div>
      </div>
      <div className="ml-8 pr-8">
        <h1 className="line-clamp-2 text-3xl font-bold">Best of Eminem</h1>
        <p className="mt-2 line-clamp-3 max-w-xs text-sm font-normal text-muted-foreground">
          Eminem, born Marshall Mathers III, is a celebrated American rapper, songwriter, and producer. Known for his
          groundbreaking albums and lyrical prowess, he&apos;s a prominent figure in hip-hop, addressing personal and
          societal issues in his music. Eminem&apos;s impact on the genre and openness about his struggles have made him
          an iconic artist.
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <div>
            <Button variant="outline" className="h-11 pr-5 font-bold uppercase">
              <PlusIcon className="mr-2 h-6 w-6" />
              <span>my playlist</span>
            </Button>
          </div>
          <div>
            <Button
              onClick={() => play({ data: eminemPlaylists[0], tracks: eminemPlaylists })}
              title="Listen now"
              className="h-[44px] pr-5 font-bold uppercase"
            >
              <PlayCircleIcon className="mr-2 h-6 w-6" />
              <span>Listen now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EminemWrldCard;
