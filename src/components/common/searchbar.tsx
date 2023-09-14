import React, { useCallback, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { Button } from '../ui/button';
import SearchItem from '../ui/search-item';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';
import ApiRequest from '@/api';
import useDebounce from '@/lib/hooks/useDebounce';
import { PlaylistItemType } from '@/types/shared';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { handleOpenSearch } from '@/lib/redux/slices/playerSlice';

const Searchbar: React.FC = () => {
  const { loading: pageLoading } = useAppSelector(state => state.track);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const debounceValue = useDebounce(query);
  const [showMenu, setShowMenu] = useState(query.length > 0);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PlaylistItemType[]>([]);

  useEffect(() => {
    fetchData(debounceValue);
  }, [debounceValue]);

  const onMouseEnter = () => (query.length ? setShowMenu(true) : setShowMenu(false));

  const onMouseLeave = () => setShowMenu(false);

  const fetchData = async (query: string) => {
    try {
      if (query !== '') {
        setLoading(true);
        const response = await ApiRequest.get(`/search?q=${query}`)({});
        if (response.status !== 200) {
          return;
        } else {
          setLoading(false);
          setResults(response.data.data);
          setShowMenu(true);
        }
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const closeSearch = () => dispatch(handleOpenSearch(false));

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative w-full">
      <form
        onSubmit={handleSubmit}
        className={`${
          showMenu ? 'rounded-t-md bg-primary-foreground shadow-soft' : 'rounded-md bg-background'
        } flex h-12 w-full items-center border border-input bg-background focus-within:bg-primary-foreground`}
      >
        <div className="flex w-full items-center pl-4 pr-2">
          <div className="pr-2">
            <SearchIcon width={18} height={18} className="hidden text-muted-foreground xl:block" />
            <ArrowLeftIcon
              onClick={closeSearch}
              width={18}
              height={18}
              className="block text-muted-foreground xl:hidden"
            />
          </div>
          <Input
            disabled={pageLoading}
            placeholder="Search for music"
            value={query}
            className={`${
              showMenu ? 'bg-primary-foreground' : 'bg-background'
            } mr-2 h-[70%] rounded-none border-transparent p-0 text-sm outline-transparent ring-0 ring-offset-0 focus-within:bg-primary-foreground focus-within:ring-offset-primary-foreground focus:border-transparent focus:ring-0 focus-visible:ring-0`}
            onChange={handleQueryChange}
          />
          {loading ? (
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
          ) : null}
        </div>
        {showMenu ? (
          <div className="absolute left-0 top-full max-h-[237px] w-full overflow-x-hidden rounded-b-md border-b border-l border-r border-input bg-primary-foreground py-2">
            <ScrollArea>
              {results.map(data => (
                <SearchItem key={data.id} data={data} tracks={results} setShowMenu={setShowMenu} setQuery={setQuery} />
              ))}
            </ScrollArea>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Searchbar;
