import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект(навігейт) на  Navigate To
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  NavigateTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={NavigateTo} /> : children;
}
