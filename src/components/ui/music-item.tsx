import { cn, formatTime } from '@/lib/utils';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { Button } from './button';
import { PauseIcon, PlayIcon } from 'lucide-react';
import { PlaylistItemType } from '@/types/shared';
import usePlayMedia from '@/lib/hooks/usePlayMedia';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { SpeakerLoudIcon, PauseIcon as PauseIcon2 } from '@radix-ui/react-icons';
import { handleIsPlaying } from '@/lib/redux/slices/playerSlice';

type MusicItemProps = {
  data: PlaylistItemType;
  tracks: PlaylistItemType[];
  active?: boolean;
  showLikeButtons?: boolean;
  addPadding?: boolean;
  className?: string;
};

const MusicItem = ({
  data,
  tracks = [],
  active = false,
  addPadding = false,
  className = '',
  showLikeButtons = false
}: MusicItemProps) => {
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying, duration, isLoadingMetadata } = useAppSelector(state => state.player);
  const { play } = usePlayMedia();
  const activeTrack = currentTrack?.id === data?.id;

  const handlePlay = () => play({ data, tracks });

  const handlePause = () => dispatch(handleIsPlaying(false));

  const handleLoadedPlay = () => dispatch(handleIsPlaying(true));

  return (
    <div
      className={cn(
        `${activeTrack && active ? 'bg-primary-foreground' : ''} ${
          addPadding ? 'border-b border-input px-4 py-2.5 pb-2 2xl:px-6' : ''
        } group/music flex w-full items-center md:w-auto`,
        className
      )}
    >
      <div className="group/image relative h-[50px] w-[50px] overflow-hidden rounded-sm">
        {activeTrack ? (
          <div>
            <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-sm bg-black bg-opacity-60 duration-200">
              {isLoadingMetadata ? (
                <div>
                  <div className="block dark:hidden">
                    <Image
                      src="/images/loader-dark.gif"
                      width={16}
                      height={16}
                      alt="Spinner gif"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                  <div className="hidden dark:block">
                    <Image
                      src="/images/loader.gif"
                      width={16}
                      height={16}
                      alt="Spinner gif"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                </div>
              ) : (
                <Fragment>
                  {isPlaying ? (
                    <Fragment>
                      <SpeakerLoudIcon className="h-5 w-5 text-white group-hover/image:hidden" />
                      <Button
                        title="Pause"
                        size="icon"
                        onClick={handlePause}
                        className="smooth-transition hidden scale-0 rounded-full bg-white hover:bg-gray-100 group-hover/image:flex group-hover/music:scale-90"
                      >
                        <PauseIcon className="h-5 w-5 fill-black text-black" />
                      </Button>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <PauseIcon2 className="h-6 w-6 text-white group-hover/image:hidden" />
                      <Button
                        title="Play"
                        size="icon"
                        onClick={handleLoadedPlay}
                        className="smooth-transition hidden scale-0 rounded-full bg-white hover:bg-gray-100 group-hover/image:flex group-hover/music:scale-90"
                      >
                        <PlayIcon className="mx-auto h-5 w-5 fill-black text-black" />
                      </Button>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        ) : (
          <div className="invisible absolute inset-0 flex h-full w-full items-center justify-center rounded-sm bg-black bg-opacity-20 opacity-0 duration-200 group-hover/music:visible group-hover/music:opacity-100">
            <Button
              title="Play"
              size="icon"
              onClick={handlePlay}
              className="smooth-transition scale-0 rounded-full bg-white hover:bg-gray-100 group-hover/music:scale-90"
            >
              <PlayIcon className="mx-auto h-5 w-5 fill-black text-black" />
            </Button>
          </div>
        )}
        <Image
          src={data?.album.cover || ''}
          width={50}
          height={50}
          alt={data?.title || 'Music player image'}
          className="rounded-sm bg-primary-foreground object-cover object-left-top"
        />
      </div>
      <div className="ml-4">
        <div onClick={handlePlay} className="w-full cursor-pointer truncate text-sm md:w-44">
          {data?.title_short}
        </div>
        <div className="line-clamp-1 w-full text-[11px] font-light text-muted-foreground md:w-44">
          {data?.album.title}
        </div>
        <Link href={`/artist/${data?.artist.id}`}>
          <div className="line-clamp-2 w-full cursor-pointer truncate text-xs font-light text-accent-foreground hover:underline md:w-32">
            {data?.artist.name}
          </div>
        </Link>
      </div>
      {showLikeButtons ? (
        <div className="ml-auto flex items-center">
          <div className="ml-auto flex scale-90 items-center opacity-0 group-hover/music:scale-100 group-hover/music:opacity-100">
            <Button title="Dislike" size="icon" variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-[20px] w-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                />
              </svg>
            </Button>
            <Button title="Like" size="icon" variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-[20px] w-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </Button>
          </div>
          <div className="block text-sm duration-200 group-hover/music:hidden">{formatTime(duration)}</div>
        </div>
      ) : null}
    </div>
  );
};

export default MusicItem;
