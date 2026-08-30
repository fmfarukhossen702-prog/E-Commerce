import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router'
import Header from '../Component/Common/Header';
import NavBar from '../Component/Common/NavBar';
import { Footer } from 'antd/es/layout/layout';

const Root = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root
