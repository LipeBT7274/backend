import React, { useState } from 'react';
import Login from './components/Login';
import Products from './components/Products';
import MyOrders from './components/MyOrders';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Minha Loja</h1>
      {token ? (
        <>
          <button onClick={handleLogout}>Sair</button>
          <MyOrders token={token} />
        </>
      ) : (
        <Login onLogin={setToken} />
      )}
      <hr />
      <Products />
    </div>
  );
}
