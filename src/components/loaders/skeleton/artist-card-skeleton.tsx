import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ArtistCardSkeleton = () => {
  return (
    <div className="group">
      <Skeleton className="h-[180px] w-[180px] rounded-full" />
      <div className="flex justify-center">
        <Skeleton className="mt-3 h-3 w-24" />
      </div>
    </div>
  );
};

export default ArtistCardSkeleton;
