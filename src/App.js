import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BooksStoreState from './context/booksStore/books-store-state';

import Home from './containers/home';
import WishList from './containers/wishlist';

import Header from './shared/header';
import Footer from './shared/footer';

import './App.scss';


function App() {
  return (
    <BooksStoreState>
      <Router>
        <div className="app">
          <Header />
          <div className="app-container">
            <Routes>
              <Route exact path="/"  element={<Home />} />
              <Route exact path="/wishlist"  element={<WishList />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      
    </BooksStoreState>
  );
}

export default App;
