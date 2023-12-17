import React, { useState } from 'react';

const Carrito = ({ carrito, quitarDelCarrito, vaciarCarrito, realizarCompra }) => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [idCompra, setIdCompra] = useState('');

  const manejarRealizarCompra = () => {
    const idAleatorio = Math.floor(Math.random() * 1000000);
    realizarCompra(idAleatorio);
    setIdCompra(idAleatorio.toString());
    setCompraRealizada(true);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {compraRealizada ? (
        <p>Su compra fue realizada con éxito bajo el ID: {idCompra}</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                {producto.title} - ${producto.precio} x {producto.cantidad}
                <button onClick={() => quitarDelCarrito(producto.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={manejarRealizarCompra}>Realizar Compra</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
