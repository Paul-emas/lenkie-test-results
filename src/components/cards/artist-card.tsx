import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { ArtistType, PlaylistItemType } from '@/types/shared';
import usePlayMedia from '@/lib/hooks/usePlayMedia';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import ApiRequest from '@/api';
import { handleCurrentTrack, handleIsLoadingMetadata, handleIsPlaying } from '@/lib/redux/slices/playerSlice';

type ArtistCardProps = {
  data: ArtistType;
};

const ArtistCard = ({ data }: ArtistCardProps) => {
  const dispatch = useAppDispatch();
  const { play } = usePlayMedia();
  const [artistTracks, setArtistTracks] = useState<PlaylistItemType[]>([]);
  const { poularPlaylists } = useAppSelector(state => state.track);

  useEffect(() => {
    if (artistTracks.length > 0) {
      const track = findTrack();
      const filteredTracks = artistTracks.filter(tk => tk.id !== track.id);
      dispatch(handleIsPlaying(false));
      dispatch(handleCurrentTrack(null));
      play({ data: track, tracks: [track, ...filteredTracks] });
    }
  }, [artistTracks]);

  const fetchArtistTracks = async () => {
    try {
      const response = await ApiRequest.get(`/artist/${data?.id}`)({});
      if (response.status === 200) {
        const artistData = response.data;
        if (artistData.tracklist) {
          const tracksResponse = await ApiRequest.get(`${process.env.NEXT_PUBLIC_PROXY}/?${artistData.tracklist}`)({});
          if (tracksResponse.status === 200) {
            if (tracksResponse.data.data.length > 0) {
              setArtistTracks(tracksResponse.data.data);
            }
          } else {
            return;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findTrack = () => {
    const trackIndex = poularPlaylists.findIndex(track => track.artist.id === data.id);
    return poularPlaylists[trackIndex];
  };

  const handlePlay = async () => {
    // console.log(data);
    try {
      setArtistTracks([]);
      const track = findTrack();
      play({ data: track, tracks: [] });

      await fetchArtistTracks();
    } catch (error) {
      console.error('Error handling play:', error);
    }
  };

  return (
    <div className="group">
      <div className="relative h-32 w-32 overflow-hidden rounded-full md:h-[180px] md:w-[180px]">
        <div className="invisible absolute z-10 flex h-full w-full scale-75 items-center justify-center rounded-full bg-black bg-opacity-20 opacity-0 backdrop-blur-sm duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
          <PlayIcon onClick={handlePlay} className="h-12 w-12 cursor-pointer fill-primary text-white" />
        </div>
        <Image
          src={data.picture_big || ''}
          width={180}
          height={180}
          alt={`${data.name} profile image`}
          className="mx-auto rounded-full bg-primary-foreground object-cover object-left-top duration-200 group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <Link href={`/artist/${data.id}`}>
          <div className="mt-2 line-clamp-1 text-sm normal-case text-primary hover:underline md:mt-3 md:text-base">
            {data.name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
