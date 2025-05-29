import React, { useEffect, useState } from 'react';
import { fetchWithToken } from '../services/api';

export default function MyOrders({ token }) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    fetchWithToken('/orders/myorders', token)
      .then(async res => {
        if (!res.ok) {
          const data = await res.json();
          setError(data.message || 'Erro ao buscar pedidos');
          return;
        }
        return res.json();
      })
      .then(data => {
        if (data) setOrders(data);
      })
      .catch(() => setError('Erro na requisição'));
  }, [token]);

  if (!token) return <p>Você precisa estar logado para ver seus pedidos.</p>;

  return (
    <div>
      <h2>Meus Pedidos</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {orders.map(o => (
          <li key={o._id}>
            Pedido #{o._id} - Total: R$ {o.totalPrice.toFixed(2)} - Status: {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
