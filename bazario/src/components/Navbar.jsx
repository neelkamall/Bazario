import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>Bazario</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({props.cartCount})</Link>
        {props.isLoggedIn ? (
          <span onClick={props.logoutUser} style={{ cursor: "pointer" }}>Logout</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;