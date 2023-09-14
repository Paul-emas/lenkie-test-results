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
    <div className={`${cn(className)} flex items-start justify-between md:items-center`}>
      <div className="w-48 md:w-auto">
        <div className="text-base font-bold normal-case md:text-xl	">{title}</div>
        <div className="text-xs font-light text-muted-foreground md:text-sm">
          <span className="line-clamp-2 normal-case">{caption}</span>
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
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 md:h-9 md:w-9"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <ChevronLeftIcon className="h-3 w-3 md:h-5 md:w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 md:h-9 md:w-9"
              onClick={() => swiperRef.current.slideNext()}
            >
              <ChevronRightIcon className="h-3 w-3 md:h-5 md:w-5" />
            </Button>
          </div>
        ) : null}
        {viewMore ? (
          <div>
            <Button size="sm" variant="outline" className="h-7 text-[10px] md:h-9 md:text-sm">
              {buttonLabel}
              <ChevronRight className="-mr-1 h-3 w-3 md:h-5 md:w-5" />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectionTitle;
