'use client';

import { MarshmelloCard, RbCard } from '@/components/banner-cards';
import { AlbumCard, ArtistCard, JuiceWrldCard, PopularTrackCard } from '@/components/cards';
import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import MusicItem from '@/components/ui/music-item';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-12 pb-28 pt-7">
        <div className="grid grid-cols-2 gap-x-7">
          <MarshmelloCard />
          <RbCard />
        </div>
        <div className="my-7">
          <SectionTitle
            title="Trending Songs for September"
            caption="Listen to your trending artists"
            buttonLabel="More"
            viewMore
          />
          <div className="mt-6 flex items-center justify-between">
            <div className="space-y-4">
              {[...Array(4)].map(id => (
                <MusicItem
                  key={id}
                  title="Maroon 5"
                  caption="Maroon 5 Hello 2020"
                  imageUrl="/images/profile.jpg"
                  imageDesc="profile image"
                />
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(4)].map(id => (
                <MusicItem
                  key={id}
                  title="Maroon 5"
                  caption="Maroon 5 Hello 2020"
                  imageUrl="/images/profile.jpg"
                  imageDesc="profile image"
                />
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(4)].map(id => (
                <MusicItem
                  key={id}
                  title="Maroon 5"
                  caption="Maroon 5 Hello 2020"
                  imageUrl="/images/profile.jpg"
                  imageDesc="profile image"
                />
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(4)].map(id => (
                <MusicItem
                  key={id}
                  title="Maroon 5"
                  caption="Maroon 5 Hello 2020"
                  imageUrl="/images/profile.jpg"
                  imageDesc="profile image"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="my-7">
          <SectionTitle title="Featured Albums" caption="Listen to your trending artists" buttonLabel="More" viewMore />
          <div className="mt-6 flex justify-between gap-x-7">
            {[...Array(6)].map(id => (
              <AlbumCard key={id} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          <JuiceWrldCard />
          <PopularTrackCard />
        </div>
        <div className="my-7">
          <SectionTitle
            title="Trending Songs for September"
            caption="Listen to your trending artists"
            buttonLabel="More"
            viewMore
          />
          <div className="mt-6 flex justify-between gap-x-7">
            {[...Array(5)].map(id => (
              <ArtistCard key={id} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
