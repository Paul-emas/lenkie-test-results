import { PlaylistItemType } from '@/types/shared';
import { useAppDispatch } from '../redux/hooks';
import { handleAddTracks, handleCurrentTrack, handleIsPlaying } from '../redux/slices/playerSlice';

export default function usePlayMedia() {
  const dispatch = useAppDispatch();

  const play = ({ data, tracks }: { data: PlaylistItemType; tracks: PlaylistItemType[] }) => {
    dispatch(handleIsPlaying(true));
    dispatch(handleCurrentTrack(data));
    dispatch(handleAddTracks(tracks));
  };

  return { play };
}
