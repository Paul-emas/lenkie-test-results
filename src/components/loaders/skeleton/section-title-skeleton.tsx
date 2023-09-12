import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

type SectionTitleSkeletonProps = {
  className?: string;
  viewMore?: boolean;
};

const SectionTitleSkeleton = ({ className = '', viewMore = false }: SectionTitleSkeletonProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className={cn(className)}>
        <Skeleton className="h-3 w-32" />
        <Skeleton className="mt-2 h-3 w-56" />
      </div>
      {viewMore ? <Skeleton className="h-9 w-[76px]" /> : null}
    </div>
  );
};

export default SectionTitleSkeleton;
