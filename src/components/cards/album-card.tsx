import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { PlayIcon } from 'lucide-react';
import { PlaylistItemType } from '@/types/shared';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

type AlbumCardProps = {
  data: PlaylistItemType;
  tracks: PlaylistItemType[];
};

const AlbumCard = ({ data, tracks }: AlbumCardProps) => {
  const { play } = usePlayMedia();

  return (
    <div className="group">
      <div className="relative h-40 w-40 overflow-hidden rounded-lg">
        <div className="invisible absolute inset-0 z-10 flex h-full w-full items-end justify-end rounded-sm bg-black bg-opacity-20 p-2 opacity-0 duration-200 group-hover:visible group-hover:opacity-100">
          <Button
            title="Play preview"
            size="icon"
            onClick={() => play({ data, tracks })}
            className="smooth-transition scale-0 rounded-full bg-white hover:bg-gray-100 group-hover:scale-90"
          >
            <PlayIcon className="h-5 w-5 fill-black text-black" />
          </Button>
        </div>
        <Image
          src={data?.album.cover_xl || ''}
          fill
          alt={data?.title || 'Music player image'}
          className="bg-primary-foreground object-cover object-left-top"
        />
      </div>
      <div className="text-left">
        <Link href={`/artist/${data.artist.id}`}>
          <div className="mt-3 line-clamp-1 text-sm font-semibold capitalize text-primary hover:underline">
            {data?.title}
          </div>
        </Link>
        <div className="text-sm font-light text-muted-foreground">{data?.artist.name}</div>
      </div>
    </div>
  );
};

export default AlbumCard;
