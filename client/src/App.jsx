import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/post/:id', element: <Single /> },
      { path: '/write', element: <Write /> },
    ],
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
