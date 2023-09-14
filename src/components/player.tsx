import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Slider } from './ui/slider';
import {
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerOffIcon,
  PlayIcon,
  ShuffleIcon,
  LoopIcon
} from '@radix-ui/react-icons';
import { handleCurrentTrack, handleIsPlaying, handleOpenSidebar } from '@/lib/redux/slices/playerSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { formatTime } from '@/lib/utils';
import Link from 'next/link';

const Player = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, currentTrack, playerTracks: tracks } = useAppSelector(state => state.player);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef<any>();
  const [volume, setVolume] = useState(100);
  const [muteVolume, setMuteVolume] = useState(false);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(true);

  const repeat = useCallback(() => {
    const currentTime = Math.round(audioRef?.current?.currentTime || 0);
    setCurrentTime(currentTime);
    setTimeProgress(currentTime);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, setCurrentTime, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      dispatch(handleOpenSidebar(false));
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, currentTime, duration]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, muteVolume, audioRef]);

  const next = () => {
    if (currentTrack) {
      dispatch(handleIsPlaying(true));
      const index = tracks.findIndex(tracks => tracks.id == currentTrack.id);
      if (index < tracks.length - 1) {
        dispatch(handleCurrentTrack(tracks[index + 1]));
      } else {
        dispatch(handleCurrentTrack(tracks[0]));
      }
    }
  };

  const prev = () => {
    if (currentTrack) {
      const index = tracks.findIndex(tracks => tracks.id == currentTrack.id);
      dispatch(handleIsPlaying(true));
      if (index === 0) {
        let lastTrackIndex = tracks.length - 1;
        dispatch(handleCurrentTrack(tracks[lastTrackIndex]));
      } else {
        dispatch(handleCurrentTrack(tracks[index - 1]));
      }
    }
  };

  const handleAudioEnded = () => {
    if (currentTrack) {
      dispatch(handleIsPlaying(false));
      const index = tracks.findIndex(tracks => tracks.id == currentTrack.id);
      if (index !== tracks.length - 1) next();
    }
  };

  const handlePlaying = () => dispatch(handleIsPlaying(!isPlaying));

  const handleProgressChange = (value: number[]) => {
    if (audioRef?.current?.currentTime) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const onLoadedMetadata = () => {
    console.log('onLoadedMetadata');
    setIsLoadingMetadata(false);
    const seconds = audioRef?.current?.duration;
    setDuration(seconds || 0);
  };

  const handleVolumeChange = (value: number[]) => setVolume(value[0]);

  const handleMuteVolume = () => setMuteVolume(!muteVolume);

  const handleShufflePlay = () => {
    dispatch(handleIsPlaying(true));
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    dispatch(handleCurrentTrack(randomTrack));
  };

  return (
    <div
      className={`${
        currentTrack ? 'block' : 'hidden'
      } fixed bottom-0 right-0 z-40 h-16 w-full border-t border-input md:h-20`}
    >
      <div className="flex h-full w-full items-center bg-primary-foreground transition-all">
        <audio
          src={currentTrack?.preview}
          controls
          onLoadedMetadata={() => onLoadedMetadata()}
          onEnded={handleAudioEnded}
          ref={audioRef}
          className="hidden"
        />
        <div className="absolute -top-1 w-full">
          <Slider value={[currentTime]} max={duration} onValueChange={handleProgressChange} />
        </div>
        <div className="w-full px-2 md:px-4">
          <div className="grid w-full grid-cols-6 md:grid-cols-5">
            {isLoadingMetadata ? <div className="col-span-4"></div> : null}
            <div className="order-last col-span-1 flex items-center md:order-first">
              <div className="flex items-center md:gap-x-2">
                <Button title="Previous" disabled={isLoadingMetadata} onClick={prev} size="icon" variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 md:h-7 md:w-7"
                  >
                    <path
                      d="M5 18L5 6M19 6V18L9 12L19 6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  title="Play/Pause"
                  disabled={isLoadingMetadata}
                  onClick={handlePlaying}
                  size="icon"
                  variant="ghost"
                  className="scale-125"
                >
                  {isLoadingMetadata ? (
                    <>
                      {' '}
                      <div className="block dark:hidden">
                        <Image
                          src="/images/loader.gif"
                          width={24}
                          height={24}
                          alt="Spinner gif"
                          className="overflow-hidden rounded-full"
                        />
                      </div>
                      <div className="hidden dark:block">
                        <Image
                          src="/images/loader-dark.gif"
                          width={24}
                          height={24}
                          alt="Spinner gif"
                          className="overflow-hidden rounded-full"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 md:h-7 md:w-7"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                      ) : (
                        <PlayIcon className="h-6 w-6" />
                      )}
                    </>
                  )}
                </Button>

                <Button title="Next" onClick={next} disabled={isLoadingMetadata} size="icon" variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 md:h-7 md:w-7"
                  >
                    <path
                      d="M19 6V18M5 18L5 6L15 12L5 18Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
              <div className="ml-3 hidden text-[13px] text-primary md:block">
                {formatTime(timeProgress)} / {formatTime(duration)}
              </div>
            </div>
            {!isLoadingMetadata ? (
              <>
                <div className="col-span-4 flex items-center gap-x-2 md:col-span-3 md:justify-center md:px-10">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 md:h-[50px] md:w-[50px]">
                      <Image
                        src={currentTrack?.album.cover || ''}
                        alt={currentTrack?.title || ''}
                        fill
                        className="rounded-sm bg-background object-cover object-left-top"
                      />
                    </div>
                    <div className="mx-3">
                      <div className="line-clamp-1 text-sm text-primary md:text-lg">{currentTrack?.title}</div>
                      <div className="-mt-0.5 flex items-center">
                        <Link href={`/artist/${currentTrack?.artist.id}`}>
                          <div className="line-clamp-1 text-xs font-light text-muted-foreground hover:underline md:text-sm">
                            {currentTrack?.artist.name}
                          </div>
                        </Link>
                        <div className="hidden md:block">
                          <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground"></div>
                        </div>
                        <div className="line-clamp-1 hidden text-xs font-light text-muted-foreground md:block md:text-sm">
                          {currentTrack?.album.title}
                        </div>
                      </div>
                    </div>
                    <div className="hidden items-center md:flex">
                      <Button title="Dislike" disabled={isLoadingMetadata} size="icon" variant="ghost">
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
                      <Button title="Like" disabled={isLoadingMetadata} size="icon" variant="ghost">
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
                  </div>
                </div>
                <div className="col-span-1 hidden items-center justify-end md:flex">
                  <div className="mr-2 w-20">
                    <Slider value={[volume]} max={100} onValueChange={handleVolumeChange} />
                  </div>
                  <Button
                    title="Mute/Unmute"
                    onClick={handleMuteVolume}
                    disabled={isLoadingMetadata}
                    size="icon"
                    variant="ghost"
                  >
                    {muteVolume || volume < 5 ? (
                      <SpeakerOffIcon className="h-[18px] w-[18px]" />
                    ) : volume < 40 ? (
                      <SpeakerModerateIcon className="h-[18px] w-[18px]" />
                    ) : (
                      <SpeakerLoudIcon className="h-[18px] w-[18px]" />
                    )}
                  </Button>
                  <Button title="Loop" disabled={isLoadingMetadata} size="icon" variant="ghost">
                    <LoopIcon className="h-[18px] w-[18px]" />
                  </Button>
                  <Button
                    title="Shuffle"
                    onClick={handleShufflePlay}
                    disabled={isLoadingMetadata}
                    size="icon"
                    variant="ghost"
                  >
                    <ShuffleIcon className="h-[18px] w-[18px]" />
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
