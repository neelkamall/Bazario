import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetails.css';

function ProductDetails(props) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => props.addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;