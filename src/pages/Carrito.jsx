import React from 'react';

const Carrito = ({ carrito, quitarDelCarrito, vaciarCarrito }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.title} - ${producto.precio}
            <button onClick={() => quitarDelCarrito(producto.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default Carrito;
