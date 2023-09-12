import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const AlbumCardSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="h-40 w-40 overflow-hidden rounded-lg" />
      <Skeleton className="mt-3 h-3 w-24" />
      <Skeleton className="mt-2 h-3 w-32" />
    </div>
  );
};

export default AlbumCardSkeleton;
