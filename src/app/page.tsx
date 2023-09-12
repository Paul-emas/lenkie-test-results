'use client';
import { useEffect, useState } from 'react';
import { ArtistType } from '@/types/shared';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
  fetchFeaturedAlbums,
  fetchEminemTracks,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist
} from '@/lib/redux/services';
import { MarshmelloCard, RbCard, AlbumCard, ArtistCard, EminemWrldCard, PopularTrackCard } from '@/components/cards';

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

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, trendingPlaylists, featuredAlbums, poularPlaylists } = useAppSelector(state => state.track);
  const [artists, setArtist] = useState<ArtistType[]>([]);

  useEffect(() => {
    dispatch(fetchTrendingPlaylist());
    dispatch(fetchMarshmelloTracks());
    dispatch(fetchRbTracks());
    dispatch(fetchFeaturedAlbums());
    dispatch(fetchPopularPlaylistArtists());
    dispatch(fetchEminemTracks());
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
        <div className="grid grid-cols-2 gap-x-7">
          {loading ? (
            <>
              <BannerSkeleton />
              <BannerSkeleton />
            </>
          ) : (
            <>
              <MarshmelloCard />
              <RbCard />
            </>
          )}
        </div>
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
                buttonLabel="More"
                viewMore
              />
              <div className="mt-6 justify-between">
                <div className="flex flex-wrap items-center justify-between gap-y-4">
                  {trendingPlaylists?.tracks.data.map(data => (
                    <MusicItem key={data.id} data={data} tracks={trendingPlaylists?.tracks.data} />
                  ))}
                </div>
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
              />
              <div className="mt-6 flex flex-wrap justify-between gap-7">
                {artists.slice(0, 5).map(data => (
                  <ArtistCard key={data.id} data={data} />
                ))}
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
                buttonLabel="More"
                viewMore
              />
              <div className="mt-6 flex justify-between gap-x-7">
                {featuredAlbums?.tracks.data
                  .slice(0, 6)
                  .map(data => <AlbumCard key={data.id} data={data} tracks={featuredAlbums?.tracks.data} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
