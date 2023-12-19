import React, { useState } from 'react';
import { useCarrito } from '../components/CarritoContext';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const {
    carrito,
    quitarDelCarrito,
    vaciarCarrito,
    realizarCompra,
    obtenerCantidadTotal,
    obtenerPrecioTotal,
  } = useCarrito();

  const [compraRealizada, setCompraRealizada] = useState(false);
  const [idCompra] = useState(generarIdCompra());
  const navigate = useNavigate();

  function generarIdCompra() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  const manejarRealizarCompra = () => {
    setCompraRealizada(true);
    realizarCompra(idCompra);
  };

  const manejarSeguirComprando = () => {

    navigate('/productos');
  };

  const manejarFinalizarCompra = () => {
    vaciarCarrito();
    setCompraRealizada(false);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {compraRealizada ? (
        <>
          <p>Su compra fue realizada con éxito bajo el ID: {idCompra}</p>
        </>
      ) : (
        <>
          <ul >
            {carrito.map((producto) => (
              <li key={producto.id}>
                {producto.title} - ${producto.precio} x {producto.cantidad} = ${producto.subtotal}
                <button onClick={() => quitarDelCarrito(producto.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <p>Total del Carrito: ${obtenerPrecioTotal()}</p>
          <p>Cantidad de productos: {obtenerCantidadTotal()}</p>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={manejarRealizarCompra}>Realizar Compra</button>
          <button onClick={manejarSeguirComprando}>Seguir Comprando</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
