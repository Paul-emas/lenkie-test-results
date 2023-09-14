import Image from 'next/image';
import React from 'react';
import { Button } from './button';
import { PlaylistItemType } from '@/types/shared';
import Link from 'next/link';
import { PlayIcon } from 'lucide-react';
import usePlayMedia from '@/lib/hooks/usePlayMedia';

type SearchItemProps = {
  data: PlaylistItemType;
  tracks: PlaylistItemType[];
  setShowMenu: (value: boolean) => void;
  setQuery: (value: string) => void;
};

const SearchItem: React.FC<SearchItemProps> = ({ data, tracks, setShowMenu, setQuery }) => {
  const { play } = usePlayMedia();

  const closeMenu = () => setShowMenu(false);

  const handlePlay = () => {
    setQuery('');
    play({ data, tracks });
    closeMenu();
  };

  return (
    <Button
      variant="ghost"
      className="inline-flex h-9 w-full items-center justify-start rounded-none px-4 py-1 xl:h-auto"
    >
      <div className="hidden xl:block">
        <Button
          title="Play preview"
          size="icon"
          onClick={handlePlay}
          className="scale-75 rounded-full bg-primary dark:bg-white dark:hover:bg-gray-100"
        >
          <PlayIcon className="h-5 w-5 fill-white text-black dark:fill-black" />
        </Button>
      </div>
      <div className="w-full text-left xl:ml-3">
        <div onClick={closeMenu} className="flex w-full items-center justify-between text-primary">
          <div onClick={handlePlay} className="line-clamp-1 w-36 cursor-pointer xl:w-72">
            {data.album.title}
          </div>
          <Link href={`/artist/${data.artist.id}`}>
            <div className="line-clamp-1 w-20 text-right text-xs hover:underline xl:w-auto">{data.artist.name}</div>
          </Link>
        </div>
      </div>
    </Button>
  );
};

export default SearchItem;
