import React, { useState } from 'react';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { Button } from '../ui/button';
import SearchItem from '../ui/search-item';
import Image from 'next/image';

const Searchbar: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [query, setQuery] = useState('');
  const showMenu = focused && query.length;

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
  };

  return (
    <div className="relative w-full">
      <form
        className={`${
          showMenu ? 'shadow-soft rounded-t-md bg-primary' : 'rounded-md'
        } flex h-12 w-full items-center border border-input bg-background focus-within:bg-primary-foreground`}
      >
        <div className="flex w-full items-center pl-4 pr-2">
          <div className="pr-2">
            <SearchIcon width={18} height={18} className="text-muted-foreground" />
          </div>
          <Input
            placeholder="Search for music"
            onFocus={onFocus}
            onBlur={onBlur}
            className="mr-2 h-[70%] rounded-none border-transparent p-0 text-sm ring-0 ring-offset-0 focus-within:bg-primary-foreground focus-within:ring-offset-primary-foreground focus:border-transparent focus:ring-0 focus-visible:ring-0"
            onChange={handleQueryChange}
          />
          <div className="mx-2">
            <div className="block dark:hidden">
              <Image
                src="/images/loader.gif"
                width={24}
                height={24}
                alt="Spinner gif"
                className="overflow-hidden rounded-full"
              />
            </div>
            <div className="hidden dark:block">
              <Image
                src="/images/loader-dark.gif"
                width={24}
                height={24}
                alt="Spinner gif"
                className="overflow-hidden rounded-full"
              />
            </div>
          </div>
          <div className="py-2">
            <Button size="sm">Search</Button>
          </div>
        </div>
        {showMenu ? (
          <div className="absolute left-0 top-full w-full rounded-b-md border-b border-l border-r border-input bg-primary-foreground py-2">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Searchbar;
