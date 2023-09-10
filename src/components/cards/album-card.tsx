import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AlbumCard = () => {
  return (
    <div className="">
      <div className="relative h-40 w-40 overflow-hidden rounded-lg">
        <Image src="/images/profile.jpg" fill alt="profile image" className="object-cover object-left-top" />
      </div>
      <div className="text-left">
        <Link href="/">
          <div className="mt-3 text-sm font-semibold capitalize text-primary hover:underline">Jon bellion</div>
        </Link>
        <div className="text-sm font-light text-muted-foreground">The right song for you</div>
      </div>
    </div>
  );
};

export default AlbumCard;
