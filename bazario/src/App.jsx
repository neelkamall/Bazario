import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(indexToRemove) {
    setCartItems(cartItems.filter((item, index) => index !== indexToRemove));
  }

  function clearCart() {
    setCartItems([]);
  }

  function loginUser() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </div>
  );
}

export default App;