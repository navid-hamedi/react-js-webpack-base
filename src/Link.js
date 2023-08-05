import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import './styles/main.scss';

function Link() {
  return (
    <div className='container'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Link;