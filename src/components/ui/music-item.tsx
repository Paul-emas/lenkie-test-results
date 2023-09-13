import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from './button';
import { PlayIcon } from 'lucide-react';
import { PlaylistItemType } from '@/types/shared';
import usePlayMedia from '@/lib/hooks/usePlayMedia';
import Link from 'next/link';

type MusicItemProps = {
  data: PlaylistItemType;
  tracks: PlaylistItemType[];
  className?: string;
};

const MusicItem = ({ data, tracks = [], className = '' }: MusicItemProps) => {
  const { play } = usePlayMedia();

  const handlePlay = () => play({ data, tracks });

  return (
    <div className={cn('group/music flex items-center', className)}>
      <div className="relative h-[50px] w-[50px] overflow-hidden rounded-sm">
        <div className="invisible absolute inset-0 flex h-full w-full items-center justify-center rounded-sm bg-black bg-opacity-20 opacity-0 duration-200 group-hover/music:visible group-hover/music:opacity-100">
          <Button
            title="Play preview"
            size="icon"
            onClick={handlePlay}
            className="smooth-transition scale-0 rounded-full bg-white hover:bg-gray-100 group-hover/music:scale-90"
          >
            <PlayIcon className="h-5 w-5 fill-black text-black" />
          </Button>
        </div>
        <Image
          src={data?.album.cover || ''}
          width={50}
          height={50}
          alt={data?.title || 'Music player image'}
          className="rounded-sm bg-primary-foreground object-cover object-left-top"
        />
      </div>
      <div className="ml-4">
        <div onClick={handlePlay} className="w-44 cursor-pointer truncate text-sm">
          {data?.title_short}
        </div>
        <Link href={`/artist/${data?.artist.id}`}>
          <div className="line-clamp-2 w-32 cursor-pointer truncate text-xs font-light text-accent-foreground hover:underline">
            {data?.artist.name}
          </div>
        </Link>
        <div className="line-clamp-1 w-44 text-xs font-light text-muted-foreground">{data?.album.title}</div>
      </div>
    </div>
  );
};

export default MusicItem;
