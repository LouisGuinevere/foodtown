import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home/Home'
import Auth from './components/pages/Auth/Auth';
import Cart from './components/pages/Cart/Cart';
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import ProductList from './components/pages/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setLoginStatus={setIsLogin}/>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth isLogin={isLogin} setLoginStatus={setIsLogin} />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product/:id" exact element={<ProductDetail />} />
          <Route path="/category/:id" exact element={<Auth />} />
          <Route path="/product/" exact element={<ProductList />} />
          <Route path="/history" exact element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
