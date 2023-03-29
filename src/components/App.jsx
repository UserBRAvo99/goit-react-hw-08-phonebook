import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refreshUser } from 'redux/auth/operations';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import Phonebook from './Phonebook';
import Register from './Register';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/contacts" element={<Phonebook />}></Route> */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          ></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
