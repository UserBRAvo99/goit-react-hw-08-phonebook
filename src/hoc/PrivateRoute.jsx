import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selector';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
