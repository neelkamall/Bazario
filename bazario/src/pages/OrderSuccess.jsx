import { Link } from 'react-router-dom';
import './OrderSuccess.css';

function OrderSuccess() {
  return (
    <div className="order-success">
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your order.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default OrderSuccess;