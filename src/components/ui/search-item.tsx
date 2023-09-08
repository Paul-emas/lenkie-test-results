import Image from 'next/image';
import React from 'react';
import { Button } from './button';

type SearchItemProps = {};

const SearchItem: React.FC<SearchItemProps> = () => {
  return (
    <Button variant="ghost" className="inline-flex w-full items-center justify-start rounded-none px-4 py-2 text-sm">
      <div>
        <Image src="/images/profile.jpg" width={35} height={35} alt="Hello" className="rounded-full" />
      </div>
      <div className="ml-3 text-primary">Hello</div>
    </Button>
  );
};

export default SearchItem;
