import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from './Pages';
import Header from './Header';
import Footer from './Footer';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Pages />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
