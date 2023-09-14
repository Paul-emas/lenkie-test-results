import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react';

type BannerSkeletonProps = {
  className?: string;
};

const BannerSkeleton = ({ className }: BannerSkeletonProps) => {
  return <Skeleton className={cn('h-44 w-1/2 md:h-52', className)} />;
};

export default BannerSkeleton;
