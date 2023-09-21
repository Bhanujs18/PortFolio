import React from 'react';

import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Chat from './components/Chat'
import AboutMe from './components/AboutMe'

import './App.css';
import Home from './components/Home'
import Footer  from './components/Footer';



import Error from './components/Error';


const App = () => {



  return (
    <>
     <Navbar />
      <Routes className='millde'> 
          <Route   path="/" element={<Home/>} />
          <Route  path="/chat" element={<Chat />} />
          <Route  path="/about" element={<AboutMe />} />
          <Route  path="*" element={<Error />} />
      </Routes>
      <Footer />

    </>
  );
};

export default App;