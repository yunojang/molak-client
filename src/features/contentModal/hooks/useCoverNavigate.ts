import { useNavigate, useParams } from 'react-router-dom';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

export const useCoverNavigate = () => {
  const navigate = useNavigate(); // has background location
  const bgLocation = useBackgroundLocation();
  const { id: contentId } = useParams();

  const coverClose = () => navigate(bgLocation ?? '/');
  const toContentList = () => navigate(`/content/${contentId}`);

  return { coverClose, toContentList };
};
