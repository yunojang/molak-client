import { useNavigate, useParams } from 'react-router-dom';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

export const useCoverNavigate = () => {
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();

  const keepNavigate = useNavigateWithBg(bgLocation);
  const coverClose = () => navigate(bgLocation ?? '/');

  // const { id: contentId } = useParams();
  // const toContentIntro = () => keepNavigate(`/content/${contentId}`);
  // const toBack = () => keepNavigate(-1);

  return { keepNavigate, coverClose };
};
