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

  const filterTrack = tracks.filter(track => track?.album?.id === data?.album?.id);

  const handlePlay = () => play({ data, tracks: filterTrack });

  return (
    <div className="group">
      <div className="relative h-32 w-32 overflow-hidden rounded-lg md:h-40 md:w-40">
        <div className="invisible absolute inset-0 z-10 flex h-full w-full items-end justify-end rounded-sm bg-black bg-opacity-20 p-2 opacity-0 duration-200 group-hover:visible group-hover:opacity-100">
          <Button
            title="Play preview"
            size="icon"
            onClick={handlePlay}
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
        <div onClick={handlePlay} className="mt-3 line-clamp-1 text-sm font-semibold capitalize text-primary">
          {data?.title}
        </div>
        <Link href={`/artist/${data.artist.id}`}>
          <div className="text-xs font-light capitalize text-muted-foreground hover:underline md:text-sm">
            {data?.artist.name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AlbumCard;
