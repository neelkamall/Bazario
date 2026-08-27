import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

function Home(props) {
  const [searchText, setSearchText] = useState("");

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
            key={product.id}
            id={product.id}
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