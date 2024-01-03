import { useAppSelector } from '@/lib/redux/hooks';
import Image from 'next/image';
import SectionTitle from './common/section-title';
import { ScrollArea } from './ui/scroll-area';
import MusicItem from './ui/music-item';
import { PlaylistItemType } from '@/types/shared';
import { useEffect, useState } from 'react';

type PlayerPreviewProps = {
  show: boolean;
};

const PlayerPreview = ({ show = false }: PlayerPreviewProps) => {
  const { currentTrack, playerTracks } = useAppSelector(state => state.player);

  const [filteredTracks, setFilteredTracks] = useState<PlaylistItemType[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (currentTrack && playerTracks.length > 0) {
      const tracks: PlaylistItemType[] = [currentTrack, ...playerTracks];
      const updatedFilteredTracks = tracks.filter(track => track?.title_short !== currentTrack?.title_short);

      if (isInitialLoad) {
        updatedFilteredTracks.unshift(currentTrack);
        setFilteredTracks(updatedFilteredTracks);
        setIsInitialLoad(false);
      } else {
        setFilteredTracks(playerTracks);
      }
    }
  }, [currentTrack, playerTracks, isInitialLoad]);

  return (
    <div
      className={`${
        show ? 'ease-transition translate-y-0' : 'smooth-transition translate-y-[150%]'
      } fixed right-0 z-20 h-[calc(100vh-140px)] w-[calc(100%-230px)] bg-background md:w-[calc(100%-250px)]`}
    >
      <div className="3xl:grid-cols-4 grid h-full grid-cols-3">
        <div className="3xl:col-span-3 col-span-2 flex items-center justify-center border-r border-input">
          <div className="3xl:h-[800px] 3xl:w-[800px] relative h-[80%] w-[75%] rounded-xl border border-input">
            <Image
              src={currentTrack?.album.cover_xl || ''}
              alt={currentTrack?.title || ''}
              fill
              className="rounded-xl bg-background object-cover object-left-top"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-4 pt-6 2xl:px-6">
            <SectionTitle
              title="Up Next"
              caption={`Now playing - ${currentTrack?.title_short} by ${currentTrack?.artist.name}`}
            />
          </div>
          <ScrollArea className="h-[calc(100vh-215px)] w-full py-4">
            <div className="group">
              {filteredTracks.map((data, ind) => (
                <MusicItem
                  key={`${data?.title}-${ind}`}
                  data={data}
                  tracks={filteredTracks}
                  showLikeButtons
                  addPadding
                  active
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default PlayerPreview;
