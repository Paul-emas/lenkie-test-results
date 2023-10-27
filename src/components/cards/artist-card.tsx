import React from 'react';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { ArtistType, PlaylistItemType } from '@/types/shared';
import usePlayMedia from '@/lib/hooks/usePlayMedia';
import { useAppSelector } from '@/lib/redux/hooks';

type ArtistCardProps = {
  data: ArtistType;
};

const ArtistCard = ({ data }: ArtistCardProps) => {
  const { play } = usePlayMedia();
  const { poularPlaylists } = useAppSelector(state => state.track);

  const handlePlay = () => {
    const trackIndex = poularPlaylists.findIndex(track => track.artist.id === data.id);
    play({ data: poularPlaylists[trackIndex], tracks: poularPlaylists });
  };
  return (
    <div className="group">
      <div className="relative h-32 w-32 overflow-hidden rounded-full md:h-[180px] md:w-[180px]">
        <div className="invisible absolute z-10 flex h-full w-full scale-75 items-center justify-center rounded-full bg-black bg-opacity-20 opacity-0 backdrop-blur-sm duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
          <PlayIcon onClick={handlePlay} className="h-12 w-12 cursor-pointer fill-primary text-white" />
        </div>
        <Image
          src={data.picture_big || ''}
          width={180}
          height={180}
          alt={`${data.name} profile image`}
          className="mx-auto rounded-full bg-primary-foreground object-cover object-left-top duration-200 group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <Link href={`/artist/${data.id}`}>
          <div className="mt-2 line-clamp-1 text-sm normal-case text-primary hover:underline md:mt-3 md:text-base">
            {data.name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
