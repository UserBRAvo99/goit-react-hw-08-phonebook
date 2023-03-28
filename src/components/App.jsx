import { Route, Routes } from 'react-router';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import Phonebook from './Phonebook';
import Register from './Register';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Phonebook />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
