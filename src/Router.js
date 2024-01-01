import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  const mainRef = useRef();
  return (
    <BrowserRouter>
      <Nav mainRef={mainRef} />
      <Routes>
        <Route path="/" element={<Main ref={mainRef} />} />
        {/* Add more routes if needed */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
