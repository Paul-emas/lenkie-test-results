import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArtistType } from '@/types/shared';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

type SectionTitleProps = {
  title?: string;
  caption?: string;
  buttonLabel?: string;
  viewMore?: boolean;
  artist?: ArtistType | null;
  className?: string;
  swiperRef?: any;
};

const SectionTitle = ({
  title = '',
  caption = '',
  buttonLabel = '',
  artist = null,
  viewMore = false,
  swiperRef,
  className = ''
}: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className={cn(className)}>
        <div className="text-xl font-bold normal-case	">{title}</div>
        <div className="text-sm font-light text-muted-foreground">
          <span className="normal-case	">{caption}</span>
          {artist ? (
            <>
              ,{' '}
              <Link href={`/artist/${artist?.id}`} className="hover:underline">
                {artist.name}
              </Link>
            </>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        {swiperRef ? (
          <div className="inset-0 z-10 flex w-full items-center justify-between gap-x-2">
            <Button size="icon" variant="outline" className="h-9" onClick={() => swiperRef.current.slidePrev()}>
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="h-9" onClick={() => swiperRef.current.slideNext()}>
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        ) : null}
        {viewMore ? (
          <div>
            <Button size="sm" variant="outline">
              {buttonLabel}
              <ChevronRight className="-mr-1 h-5 w-5" />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectionTitle;
