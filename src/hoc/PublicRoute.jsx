import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selector';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const fromPage = location.state?.from.pathname || '/';

  if (isLoggedIn) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
