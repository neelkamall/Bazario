import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import API_URL from '../api';
import './Home.css';

function Home(props) {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={() => props.addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;