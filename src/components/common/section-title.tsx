import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

type SectionTitleProps = {
  title: string;
  caption: string;
  buttonLabel?: string;
  viewMore?: boolean;
  className?: string;
};

const SectionTitle = ({
  title = '',
  caption = '',
  buttonLabel = '',
  viewMore = false,
  className = ''
}: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className={cn(className)}>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm font-light text-muted-foreground">{caption}</div>
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
