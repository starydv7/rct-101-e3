import React, { useEffect,useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Product from '../../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchproducts = async () => {
            let r = await fetch(`http://localhost:8080/products`);
            let d = await r.json();
            setProducts(d);
        };
        fetchproducts();

    }, []);

  return (
    <div className='grid'> Products:
          {/* {" "} */}
          <div>
              <div className='grid3'>
              {products.map((p) => (
                  <div key={p.id} className="grid">
                      
                      <div className='grid1'>
                          <h4> Name:{p.name}</h4>
                          <br/>
                          
                          
                           <h5> Price:{p.price}</h5> 
                    <h6>{p.id}</h6>
                    <Product/>
                      </div>
                     
                      
                  </div>
              ))}
                  </div>
          </div>
          <Outlet/>
    </div>
  )
}

export default Products