'use client';
import { useEffect, useRef, useState } from 'react';
import { ArtistType, PlaylistItemType } from '@/types/shared';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
  fetchFeaturedAlbums,
  fetchEminemTracks,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist,
  fetchJonBellionTracks
} from '@/lib/redux/services';
import {
  MarshmelloCard,
  RbCard,
  AlbumCard,
  ArtistCard,
  EminemWrldCard,
  PopularTrackCard,
  JobBellionCard
} from '@/components/cards';

import {
  AlbumCardSkeleton,
  ArtistCardSkeleton,
  BannerSkeleton,
  MusicItemSkeleton,
  SectionTitleSkeleton
} from '@/components/loaders/skeleton';

import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import MusicItem from '@/components/ui/music-item';
import { Skeleton } from '@/components/ui/skeleton';
import { SwiperSlide } from 'swiper/react';
import Slider from '@/components/slider';

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, trendingPlaylists, featuredAlbums, poularPlaylists } = useAppSelector(state => state.track);
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [albums, setAlbums] = useState<PlaylistItemType[]>([]);
  const artistSlideRef = useRef();
  const albumSlideRef = useRef();
  const trendingPlaylistsSlideRef = useRef();

  useEffect(() => {
    dispatch(fetchTrendingPlaylist());
    dispatch(fetchMarshmelloTracks());
    dispatch(fetchRbTracks());
    dispatch(fetchFeaturedAlbums());
    dispatch(fetchPopularPlaylistArtists());
    dispatch(fetchEminemTracks());
    dispatch(fetchJonBellionTracks());
  }, [dispatch]);

  useEffect(() => {
    const artistArr = poularPlaylists?.map(track => track.artist);
    if (featuredAlbums?.tracks.data)
      setAlbums(
        featuredAlbums?.tracks.data.filter((album: { title: string }, ind: number, arr: string | any[]) => {
          return ind === arr.length - 1 || album?.title.toLowerCase() !== arr[ind + 1]?.title.toLowerCase();
        })
      );
    setArtists(
      artistArr.filter((artist, ind, arr) => {
        return ind === arr.length - 1 || artist?.name.toLowerCase() !== arr[ind + 1]?.name.toLowerCase();
      })
    );
  }, [poularPlaylists, featuredAlbums]);

  return (
    <AppLayout>
      <div className="pb-14 pt-5 md:space-y-12 md:pb-28 md:pt-7">
        {loading ? (
          <>
            <div className="hidden gap-x-7 md:flex">
              <BannerSkeleton />
              <BannerSkeleton />
              <Skeleton className="h-52 w-40 rounded-l-sm rounded-r-none" />
            </div>
            <div className="block md:hidden">
              <BannerSkeleton className="w-full" />
            </div>
          </>
        ) : (
          <div className="w-full md:col-span-2">
            <Slider
              slidesPerView={1}
              spaceBetween={28}
              autoplay
              breakpoints={{
                640: {
                  slidesPerView: 1.4
                },
                768: {
                  slidesPerView: 1.9
                },
                1024: {
                  slidesPerView: 2.3
                }
              }}
            >
              <SwiperSlide>
                <MarshmelloCard />
              </SwiperSlide>
              <SwiperSlide>
                <RbCard />
              </SwiperSlide>
              <SwiperSlide>
                <JobBellionCard />
              </SwiperSlide>
            </Slider>
          </div>
        )}

        <div className="my-7">
          {loading ? (
            <>
              <SectionTitleSkeleton viewMore />
              <div className="mt-6 hidden items-center justify-between md:flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div className="space-y-4" key={index}>
                    <MusicItemSkeleton />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between md:hidden">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div className="space-y-4" key={index}>
                    <MusicItemSkeleton />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionTitle
                title={trendingPlaylists?.title}
                caption={trendingPlaylists?.description}
                swiperRef={trendingPlaylistsSlideRef}
                buttonLabel="More"
                viewMore
              />
              <div className="mt-6 justify-between">
                <Slider swiperRef={trendingPlaylistsSlideRef} slidesPerView={1}>
                  <SwiperSlide>
                    <div className="flex h-64 flex-wrap items-center justify-between gap-y-4 md:h-auto">
                      {trendingPlaylists?.tracks.data
                        .slice(0, 16)
                        .map(data => <MusicItem key={data.id} data={data} tracks={trendingPlaylists?.tracks.data} />)}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex h-64 flex-wrap items-center justify-between gap-y-4 md:h-auto">
                      {trendingPlaylists?.tracks.data
                        .slice(16, 32)
                        .map(data => <MusicItem key={data.id} data={data} tracks={trendingPlaylists?.tracks.data} />)}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex h-64 flex-wrap items-center justify-between gap-y-4 md:h-auto">
                      {trendingPlaylists?.tracks.data
                        .slice(32, 48)
                        .map(data => <MusicItem key={data.id} data={data} tracks={trendingPlaylists?.tracks.data} />)}
                    </div>
                  </SwiperSlide>
                </Slider>
              </div>
            </>
          )}
        </div>
        <div className="my-7">
          {loading && !artists.length ? (
            <>
              <SectionTitleSkeleton viewMore />
              <div className="mt-6 hidden justify-between gap-x-7 md:flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ArtistCardSkeleton key={index} />
                ))}
              </div>
              <div className="mt-6 flex justify-between gap-x-7  md:hidden">
                {Array.from({ length: 3 }).map((_, index) => (
                  <ArtistCardSkeleton key={index} />
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionTitle
                title="Discover Popular artists"
                caption="Listen to your favorite artists"
                buttonLabel="More"
                viewMore
                swiperRef={artistSlideRef}
              />
              <div className="mt-6">
                <Slider
                  swiperRef={artistSlideRef}
                  slidesPerView={2.5}
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
                    }
                  }}
                >
                  {artists.map(data => (
                    <SwiperSlide key={data.id}>
                      <ArtistCard data={data} />
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            </>
          )}
        </div>

        <div className="grid gap-x-10 xl:grid-cols-3">
          {loading ? (
            <>
              {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} className={index === 0 ? 'col-span-2 mt-3 h-80' : 'h-[345px]'} />
              ))}
            </>
          ) : (
            <>
              <EminemWrldCard />
              <PopularTrackCard />
            </>
          )}
        </div>
        <div className="my-7">
          {loading ? (
            <>
              <SectionTitleSkeleton viewMore />
              <div className="mt-6 flex justify-between gap-x-7">
                {Array.from({ length: 6 }).map((_, index) => (
                  <AlbumCardSkeleton key={index} />
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionTitle
                title="Relaxing Lofi music"
                caption="Lofi music relaxes your mind"
                buttonLabel="More"
                swiperRef={albumSlideRef}
                viewMore
              />
              <div className="mt-6 flex justify-between gap-x-7">
                <Slider
                  swiperRef={albumSlideRef}
                  slidesPerView={2.6}
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
                  {albums.map(data => (
                    <SwiperSlide key={data.id}>
                      <AlbumCard data={data} tracks={albums} />
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
