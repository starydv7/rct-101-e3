import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


const Product = (props) => {
   const [count, setCount] = useState(0);
    
     const handleChange = () => {
         setCount(count + 1);
    }
     const handleSub = () => {
         setCount(count - 1);
  }
  const [products, setProducts] = useState({});
   const [items, setItems] = React.useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
          fetch(`http://localhost:8080/products/${id}`)
                .then((r) => r.json())
                .then((d) => setProducts(d));
        }
    }, [id]);
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description }</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handleChange}>AddtoCart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"onClick={handleChange} >+</button>
        <span data-cy="product-count">
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handleSub}>-</button>
        <button data-cy="product-remove-cart-item-button"onClick={handleSub}>X</button>
      </div>
    </div>
  );
};

export default Product;
