import React from 'react';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';
import Link from 'next/link';

const ArtistCard = () => {
  return (
    <div className="group">
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
        <Link href="/">
          <div className="mt-3 capitalize text-primary hover:underline">Jon bellion</div>
        </Link>
        <div className="text-sm font-light text-muted-foreground">The right song for you</div>
      </div>
    </div>
  );
};

export default ArtistCard;
