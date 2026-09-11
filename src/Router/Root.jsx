import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Component/Common/Header';
import NavBar from '../Component/Common/NavBar';
import Footer from '../Component/Common/Footer'
import DummyJson from '../Component/Common/DummyJson';

const Root = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <DummyJson />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Root
