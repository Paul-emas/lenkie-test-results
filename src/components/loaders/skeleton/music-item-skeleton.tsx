import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React, { Fragment } from 'react';

type MusicItemSkeletonProps = { className?: string };

const MusicItemSkeleton = ({ className }: MusicItemSkeletonProps) => {
  return (
    <Fragment>
      {[...Array(4)].map(id => (
        <div key={id} className={cn('flex items-center', className)}>
          <Skeleton className="h-[50px] w-[50px] rounded-md" />
          <div className="ml-4">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="mt-2 h-3 w-44" />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MusicItemSkeleton;
