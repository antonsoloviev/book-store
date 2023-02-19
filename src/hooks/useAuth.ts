import { useAppSelector } from '../store/store';
import { userSelector } from '../store/user-slice';

export function useAuth() {
  const { userName, email, token, id } = useAppSelector(userSelector);

  return {
    isAuthorized: !!email,
    userName,
    email,
    token,
    id
  };
}
