import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} width="150" />
        <h3>{props.name}</h3>
        <p>₹{props.price}</p>
      </Link>
      <button onClick={props.addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;