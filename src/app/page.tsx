'use client';

import { useEffect, useState } from 'react';

import { MarshmelloCard, RbCard } from '@/components/banner-cards';
import { AlbumCard, ArtistCard, JuiceWrldCard, PopularTrackCard } from '@/components/cards';
import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import MusicItem from '@/components/ui/music-item';
import {
  AlbumCardSkeleton,
  ArtistCardSkeleton,
  BannerSkeleton,
  MusicItemSkeleton,
  SectionTitleSkeleton
} from '@/components/loaders/skeleton';
import {
  fetchFeaturedAlbums,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist
} from '@/lib/redux/services';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { ArtistType } from '@/types/shared';

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
  }, []);

  useEffect(() => {
    const artistArr = poularPlaylists?.map(track => track.artist);
    setArtist(
      artistArr.filter((artist, ind, arr) => {
        // Check if the artist's name (case-insensitive) is not the same as the next artist's name
        return ind === arr.length - 1 || artist?.name.toLowerCase() !== arr[ind + 1]?.name.toLowerCase();
      })
    );
  }, [poularPlaylists]);

  console.log(artists);
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
                <div className="space-y-4">
                  <MusicItemSkeleton />
                </div>
                <div className="space-y-4">
                  <MusicItemSkeleton />
                </div>
                <div className="space-y-4">
                  <MusicItemSkeleton />
                </div>
                <div className="space-y-4">
                  <MusicItemSkeleton />
                </div>
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
                <ArtistCardSkeleton />
                <ArtistCardSkeleton />
                <ArtistCardSkeleton />
                <ArtistCardSkeleton />
                <ArtistCardSkeleton />
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
          <JuiceWrldCard />
          <PopularTrackCard />
        </div>
        <div className="my-7">
          {loading ? (
            <>
              <SectionTitleSkeleton viewMore />
              <div className="mt-6 flex justify-between gap-x-7">
                <AlbumCardSkeleton />
                <AlbumCardSkeleton />
                <AlbumCardSkeleton />
                <AlbumCardSkeleton />
                <AlbumCardSkeleton />
                <AlbumCardSkeleton />
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
