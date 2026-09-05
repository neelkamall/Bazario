import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_URL from '../api';
import './ProductDetails.css';

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

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