'use client';
import { useEffect, useRef, useState } from 'react';
import { ArtistType } from '@/types/shared';
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
  const [artists, setArtist] = useState<ArtistType[]>([]);
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
    setArtist(
      artistArr.filter((artist, ind, arr) => {
        return ind === arr.length - 1 || artist?.name.toLowerCase() !== arr[ind + 1]?.name.toLowerCase();
      })
    );
  }, [poularPlaylists]);

  return (
    <AppLayout>
      <div className="space-y-12 pb-28 pt-7">
        {loading ? (
          <div className="flex gap-x-7">
            <BannerSkeleton />
            <BannerSkeleton />
            <Skeleton className="h-52 w-40 rounded-l-sm rounded-r-none" />
          </div>
        ) : (
          <div className="col-span-2 w-full">
            <Slider slidesPerView={2.3} spaceBetween={28} autoplay>
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
              <div className="mt-6 flex items-center justify-between">
                {Array.from({ length: 4 }).map((_, index) => (
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
                    <div className="flex flex-wrap items-center justify-between gap-y-4">
                      {trendingPlaylists?.tracks.data
                        .slice(0, 16)
                        .map(data => <MusicItem data={data} tracks={trendingPlaylists?.tracks.data} />)}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap items-center justify-between gap-y-4">
                      {trendingPlaylists?.tracks.data
                        .slice(16, 32)
                        .map(data => <MusicItem data={data} tracks={trendingPlaylists?.tracks.data} />)}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap items-center justify-between gap-y-4">
                      {trendingPlaylists?.tracks.data
                        .slice(32, 48)
                        .map(data => <MusicItem data={data} tracks={trendingPlaylists?.tracks.data} />)}
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
              <div className="mt-6 flex justify-between gap-x-7">
                {Array.from({ length: 5 }).map((_, index) => (
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
                <Slider swiperRef={artistSlideRef} slidesPerView={5} spaceBetween={28}>
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

        <div className="grid grid-cols-3 gap-x-10">
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
                title={featuredAlbums?.title}
                caption={featuredAlbums?.label}
                artist={featuredAlbums?.artist}
                swiperRef={albumSlideRef}
                buttonLabel="More"
                viewMore
              />
              <div className="mt-6 flex justify-between gap-x-7">
                <Slider swiperRef={albumSlideRef} slidesPerView={6} spaceBetween={28}>
                  {featuredAlbums?.tracks.data.map(data => (
                    <SwiperSlide key={data.id}>
                      <AlbumCard data={data} tracks={featuredAlbums?.tracks.data} />
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
