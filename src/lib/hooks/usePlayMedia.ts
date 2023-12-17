import { PlaylistItemType } from '@/types/shared';
import { useAppDispatch } from '../redux/hooks';
import {
  handleAddTracks,
  handleCurrentTime,
  handleCurrentTrack,
  handleDuration,
  handleIsLoadingMetadata,
  handleIsPlaying
} from '../redux/slices/playerSlice';

export default function usePlayMedia() {
  const dispatch = useAppDispatch();

  const play = ({ data, tracks }: { data: PlaylistItemType; tracks: PlaylistItemType[] }) => {
    dispatch(handleCurrentTrack(null));
    dispatch(handleIsPlaying(true));
    dispatch(handleIsLoadingMetadata(true));
    dispatch(handleDuration(0));
    dispatch(handleCurrentTime(0));
    dispatch(handleCurrentTrack(data));
    dispatch(handleAddTracks(tracks));
  };

  return { play };
}
