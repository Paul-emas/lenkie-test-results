'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import ApiRequest from '@/api';
import { AlbumCard } from '@/components/cards';
import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import { Button } from '@/components/ui/button';
import TrackCard from '@/components/ui/track-card';
import usePlayMedia from '@/lib/hooks/usePlayMedia';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { handleLoading } from '@/lib/redux/slices/trackSlice';
import { AppDispatch } from '@/lib/redux/store';
import { numberFormatter } from '@/lib/utils';
import { AlbumType, ArtistType, PlaylistItemType } from '@/types/shared';
import Image from 'next/image';
import Slider from '@/components/slider';
import { SwiperSlide } from 'swiper/react';

const fetchArtist = async (id: string | string[], dispatch: AppDispatch) => {
  try {
    const response = await ApiRequest.get(`/artist/${id}`)({});
    if (response.status === 200) {
      const artistData = response.data;

      if (artistData.tracklist) {
        const tracksResponse = await ApiRequest.get(`${process.env.NEXT_PUBLIC_PROXY}/?${artistData.tracklist}`)({});
        if (tracksResponse.status === 200) {
          dispatch(handleLoading(false));
          if (tracksResponse.data.data.length > 0) {
            const albums = tracksResponse.data.data.filter(
              (album: { title: string }, ind: number, arr: string | any[]) => {
                return ind === arr.length - 1 || album?.title.toLowerCase() !== arr[ind + 1]?.title.toLowerCase();
              }
            );
            return { artistData, tracks: tracksResponse.data.data, albums: albums };
          }
        } else {
          return;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default function ArtistPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { play } = usePlayMedia();
  const { loading } = useAppSelector(state => state.track);
  const [artistData, setArtistData] = useState<ArtistType | null>(null);
  const [tracks, setTracks] = useState<PlaylistItemType[]>([]);
  const [albums, setAlbums] = useState<PlaylistItemType[]>([]);
  const [showMore, setShowMore] = useState(false);
  const atLeastFiveAlbums = albums && albums.length > 5 ? true : false;
  const albumSlideRef = useRef();

  useEffect(() => {
    if (params?.id) {
      (async () => {
        dispatch(handleLoading(true));
        const data = await fetchArtist(params.id, dispatch);
        setArtistData(data?.artistData);
        setTracks(data?.tracks);
        setAlbums(data?.albums);
      })();
    }
    return () => {
      dispatch(handleLoading(true));
      setArtistData(null);
      setTracks([]);
      setAlbums([]);
    };
  }, [params?.id]);

  const handleShow = () => setShowMore(true);

  const handleShufflePlay = () => {
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    play({ data: randomTrack, tracks });
  };

  return (
    <AppLayout>
      {loading ? (
        <div className="mt-32 md:mt-40">
          <div className="mt-4 rounded-3xl border border-input bg-primary-foreground pb-[400px]">
            <div className="relative -top-28">
              <div className="relative mx-auto h-36 w-36 rounded-full border border-input bg-primary-foreground md:h-44 md:w-44" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-32 pb-14 md:mt-40 md:pb-40">
          <div className="mt-4 rounded-3xl border border-input bg-gradient-to-br from-primary-foreground via-primary-foreground to-gray-200 p-3 pb-12 dark:to-gray-800 md:p-5">
            <div className="relative -top-32">
              <div className="relative mx-auto h-36 w-36 rounded-full border-[6px] border-primary shadow-2xl md:h-44 md:w-44">
                <Image
                  src={artistData?.picture_big || ''}
                  fill
                  alt="Artist image"
                  className="rounded-full bg-primary-foreground object-cover object-top"
                />
              </div>
              <div className="mt-3 text-center md:mt-5">
                <div className="text-xl font-bold text-primary md:text-3xl">{artistData?.name || ''}</div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-x-3 md:mt-5">
                <Button onClick={handleShufflePlay} title="Shuffle play" variant="outline" className="h-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="shuffleIconTitle"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                    color="currentColor"
                    className="h-[23px] w-[23px]"
                  >
                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{' '}
                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{' '}
                    <path d="M19 4L22 7L19 10" /> <path d="M19 13L22 16L19 19" />{' '}
                  </svg>
                  <span className="ml-2">Shuffle play</span>
                </Button>
                <Button title="Subscribe">Subscribe {numberFormatter(artistData?.nb_fan || 0)}</Button>
              </div>
            </div>
            <div className="-mt-24 px-2 md:px-6">
              <SectionTitle title="Tracks" caption="" />
              <div className="mt-3md:mt-4">
                {tracks
                  .slice(0, !showMore ? 5 : tracks.length)
                  ?.map(data => <TrackCard key={data.id} data={data} tracks={tracks} />)}
              </div>
              {!showMore ? (
                <Button onClick={handleShow} title="Show more" className="mt-2">
                  Show all
                </Button>
              ) : null}

              {albums.length > 0 ? (
                <div className="mt-12">
                  <SectionTitle title="Albums" caption="" swiperRef={albumSlideRef} />
                  <div className="mt-3 md:mt-6">
                    <Slider
                      swiperRef={albumSlideRef}
                      slidesPerView={2.4}
                      spaceBetween={28}
                      breakpoints={{
                        640: {
                          slidesPerView: 3.3
                        },
                        768: {
                          slidesPerView: 3.3
                        },
                        1024: {
                          slidesPerView: 4.3
                        },
                        992: {
                          slidesPerView: 5.3
                        },
                        1100: {
                          slidesPerView: 5.3
                        },
                        1200: {
                          slidesPerView: 6.3
                        }
                      }}
                    >
                      {albums?.map(data => (
                        <SwiperSlide key={data.id}>
                          <AlbumCard data={data} tracks={albums} />
                        </SwiperSlide>
                      ))}
                    </Slider>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
