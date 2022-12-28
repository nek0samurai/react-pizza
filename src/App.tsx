// import logo from './logo.svg';
import './App.css';
import './scss/app.scss'

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route, useParams } from 'react-router-dom'
import FullPizza from './pages/FullPizza';

function App() {
  
  const {id} = useParams()
  
  
  return (
    <div className="App">
      <div className="wrapper">
      
      <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/pizza/:id' element={<FullPizza/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
