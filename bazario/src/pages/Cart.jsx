import { useNavigate } from 'react-router-dom';
import API_URL from '../api';
import './Cart.css';

function Cart(props) {
  const navigate = useNavigate();

  const totalPrice = props.cartItems.reduce((sum, item) => sum + item.price, 0);

  function handlePlaceOrder() {
    if (!props.isLoggedIn) {
      navigate("/login");
      return;
    }

    const items = props.cartItems.map((item) => ({
      product: item._id,
      quantity: 1,
    }));

    const token = localStorage.getItem("accessToken");

    fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          alert(result.message);
          return;
        }
        props.clearCart();
        navigate("/order-success");
      });
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