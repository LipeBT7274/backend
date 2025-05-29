import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - R$ {p.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}
