import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArtistType } from '@/types/shared';

type SectionTitleProps = {
  title: string | undefined;
  caption: string | undefined;
  buttonLabel?: string | undefined;
  viewMore?: boolean;
  artist?: ArtistType | null;
  className?: string;
};

const SectionTitle = ({
  title = '',
  caption = '',
  buttonLabel = '',
  artist = null,
  viewMore = false,
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
      {viewMore ? (
        <div>
          <Button size="sm" variant="outline">
            {buttonLabel}
            <ChevronRight className="-mr-1 h-5 w-5" />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default SectionTitle;
