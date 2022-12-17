// import logo from './logo.svg';
import './App.css';
import './scss/app.scss'

import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom'
export const SearchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  
  
  return (
    <div className="App">
      <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>

              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            
          </div>
        </div>
      </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
