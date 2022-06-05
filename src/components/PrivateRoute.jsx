import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

// /**
//  * 1. Он должен повторять API Route
//  *  2. Он должен рендерить Route
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на redirectTo
//  */ компонент <Redirect to './login' із браузер - раутера-5,
// в 6му <Redirect to './login' замінили на <Navigate to="/login" replace />   - replace щоб не збеігати попередній маршрут (стоінка контактів), а зразу овертатися на ту з якої прийшли на контакти
//  його можна зарендерить в любому місці нашого приложенія і казати йому маршрут
// коли він  зарендериться то в момент його рендера відбудеться перенаправлення по цьому маршруту
// функція приймає пропси всі що передаються в рауті, в тому числі і чилдренів які мають рендериться під цим маршутом(наші контакти).

// export default function PrivateRoute(props) {
//   return <Route {...props} />;
// }
// Тому ми дітей деструктиризуємо, а всі інші пропси розпиляємо
export default function PrivateRoute({ children }) {
  // візьмемо для отримання стейта ізЛогін
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const error = useSelector(authSelectors.getError);
  console.log(isLoggedIn);
  // console.log(error);
  return isLoggedIn ? children : <Navigate to={'/login'} />;
  // return isLoggedIn && children;
}

// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
