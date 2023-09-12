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
    <div className="relative h-72">
      <div className="absolute bottom-0 z-10 w-full px-6 pb-2">
        <div className="flex items-center justify-between gap-x-6">
          <div className="text-xs font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis adipisicing elit. Delectus
            perspiciatis
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
        src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/e6/3d/10/e63d1085-096f-00de-3d68-8f006013e15a/0f019258-1e0f-4a37-9b7a-abcce98cb4c8.png/960x550sr.webp"
        fill
        alt="profile image"
        className="rounded-sm bg-primary-foreground object-cover object-left-top"
      />
    </div>
  );
};

export default RbCard;
