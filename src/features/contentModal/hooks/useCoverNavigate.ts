import { useNavigate, useParams } from 'react-router-dom';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

export const useCoverNavigate = () => {
  const bg = useBackgroundLocation();
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);
  const { id: contentId } = useParams();

  const coverClose = () => navigate(bgLocation ?? '/');
  const toContentIntro = () => keepNavigate(`/content/${contentId}`);
  const toBack = () => keepNavigate(-1);

  return { coverClose, toContentIntro, toBack };
};
