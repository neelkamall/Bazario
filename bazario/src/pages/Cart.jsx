import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart(props) {
  const navigate = useNavigate();

  const totalPrice = props.cartItems.reduce((sum, item) => sum + item.price, 0);

  function handlePlaceOrder() {
    if (!props.isLoggedIn) {
      navigate("/login");
      return;
    }
    props.clearCart();
    navigate("/order-success");
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {props.cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => props.removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <h3 className="cart-total">Total: ₹{totalPrice}</h3>
      <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Cart;