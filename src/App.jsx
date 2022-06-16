import React from 'react';
import './app.module.css';
import Home from './component/home/home';
import Userpage from './component/userpage/userpage';
import { Navigate, useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'userpage', element: <Userpage /> },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);

  return routes;
}

export default App;
