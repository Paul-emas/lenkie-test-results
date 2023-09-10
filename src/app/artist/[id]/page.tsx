'use client';
import { AlbumCard } from '@/components/cards';
import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import { Button } from '@/components/ui/button';
import MusicItem from '@/components/ui/music-item';
import TrackCard from '@/components/ui/track-card';
import { PlayIcon } from 'lucide-react';
import Image from 'next/image';

export default function ArtistPage({ params }) {
  return (
    <AppLayout>
      <div className="mt-40 pb-40">
        <div className="mt-4 rounded-3xl border border-input bg-gradient-to-br from-primary-foreground via-primary-foreground to-gray-200 p-5 pb-12 dark:to-gray-800">
          <div className="relative -top-32">
            <div className="relative mx-auto h-44 w-44 rounded-full border-[6px] border-primary shadow-2xl">
              <Image
                src="https://e-cdns-images.dzcdn.net/images/artist/32458864045f1087652738e10bcdf74b/1000x1000-000000-80-0-0.jpg"
                fill
                alt="Artist image"
                className="rounded-full object-cover object-top"
              />
            </div>
            <div className="mt-5 text-center">
              <div className="text-3xl font-bold text-primary">Juice Wrld</div>
              <p className="font-light text-muted-foreground">Lorem, ipsum dolor sit amet</p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-3">
              <Button variant="outline" className="h-11">
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
              <Button>Subscribe 228K</Button>
            </div>
          </div>
          <div className="-mt-24 px-6">
            <SectionTitle title="Tracks" caption="" />
            <div className="mt-4">
              {[...Array(7)].map(id => (
                <TrackCard key={id} />
              ))}
            </div>
            <Button className="mt-2">Show all</Button>

            <div className="mt-12">
              <SectionTitle title="Featured Albums" caption="Listen to your trending artists" />
              <div className="mt-6 flex justify-between gap-x-7">
                {[...Array(5)].map(id => (
                  <AlbumCard key={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
