'use client';

import { MarshmelloCard, RbCard } from '@/components/banner-cards';
import SectionTitle from '@/components/common/section-title';
import AppLayout from '@/components/layouts/app-layout';
import { Button } from '@/components/ui/button';
import MusicItem from '@/components/ui/music-item';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowBigDown, ChevronDown, ChevronRight, PlayCircleIcon, PlayIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';

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
          <div className="mt-6 grid grid-cols-4">
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
        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-2 flex items-center justify-center rounded-lg border border-input bg-background p-5">
            <div className="h-64">
              <div className="relative h-full w-64 overflow-hidden rounded-md">
                <Image
                  src="https://e-cdns-images.dzcdn.net/images/cover/b57e2db906a8af3c54b4485313bf18c2/1000x1000-000000-80-0-0.jpg"
                  fill
                  alt="profile image"
                  className="rounded-sm object-cover object-left-top"
                />
              </div>
            </div>
            <div className="ml-6 max-w-sm pr-8">
              <h1 className="line-clamp-2 text-3xl font-bold">The Big show of all time</h1>
              <p className="mt-2 line-clamp-3 text-sm font-normal text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil soluta quibusdam, est commodi eveniet
                minima, dolorem voluptatum facere maiores nisi voluptates quia saepe velit delectus ex.
              </p>
              <div className="mt-6 flex gap-x-4">
                <div>
                  <Button variant="outline" className="font-bold uppercase">
                    <PlusIcon className="mr-2" />
                    <span>my playlist</span>
                  </Button>
                </div>
                <div>
                  <Button className="font-bold uppercase">
                    <PlayCircleIcon className="mr-2" />
                    <span>Listen now</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg border border-input bg-background px-5 py-3">
            <div className="text-lg font-bold">Popular Artist</div>
            <div className="text-sm font-light text-muted-foreground">Listen to your trending artists</div>
            <div className="flex w-full items-center justify-between">
              <ScrollArea className="h-[215px] w-full py-4">
                <div className="space-y-4">
                  {[...Array(6)].map(id => (
                    <MusicItem
                      key={id}
                      title="Maroon 5"
                      caption="Maroon 5 Hello 2020"
                      imageUrl="/images/profile.jpg"
                      imageDesc="profile image"
                    />
                  ))}
                </div>
              </ScrollArea>
              <div className="absolute -right-[84px] flex rotate-90 items-center text-sm font-light">
                <div>Scroll to view more </div>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <Button className="mb-2 mt-2 w-full">View More</Button>
          </div>
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
              <div key={id} className="group">
                <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full">
                  <div className="invisible absolute z-10 flex h-full w-full scale-75 items-center justify-center rounded-full bg-black bg-opacity-20 opacity-0 backdrop-blur-sm duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                    <PlayIcon className="h-12 w-12 text-white" />
                  </div>
                  <Image
                    src="/images/profile.jpg"
                    width={180}
                    height={180}
                    alt="profile image"
                    className="mx-auto rounded-full object-cover object-left-top duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <div className="mt-3 capitalize text-primary">Jon bellion</div>
                  <div className="text-sm font-light text-muted-foreground">The right song for you</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
