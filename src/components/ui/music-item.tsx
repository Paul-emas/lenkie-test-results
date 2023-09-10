import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type MusicItemProps = {
  title: string;
  caption: string;
  imageUrl: string;
  imageDesc: string;
  className?: string;
};

const MusicItem = ({ title = '', caption = '', imageUrl = '', imageDesc = '', className = '' }: MusicItemProps) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div>
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt={imageDesc}
          className="bg rounded-sm object-cover object-left-top"
        />
      </div>
      <div className="ml-4">
        <div className="text-sm">{title}</div>
        <div className="text-xs font-light text-muted-foreground">{caption}</div>
      </div>
    </div>
  );
};

export default MusicItem;
