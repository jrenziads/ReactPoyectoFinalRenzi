
import React, { useState } from 'react';
import { useCarrito } from '../components/CarritoContext';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Carrito = () => {
  const {
    carrito,
    quitarDelCarrito,
    vaciarCarrito,
    finalizarCompra,
    obtenerCantidadTotal,
    obtenerPrecioTotal,
    idCompra,
  } = useCarrito();

  const [compraRealizada, setCompraRealizada] = useState(false);
  const navigate = useNavigate();

  const manejarRealizarCompra = () => {
    setCompraRealizada(true);
    navigate('/checkout');
  };

  const manejarSeguirComprando = () => {
    navigate('/productos');
  };

  const manejarFinalizarCompra = () => {
    vaciarCarrito();
    setCompraRealizada(false);
  };

  return (
    <div className="container">
      <h2 className="title is-2">Carrito de Compras</h2>
      {compraRealizada ? (
        <>
          <p>Su compra fue realizada con éxito bajo el ID: {idCompra}</p>
          <br />
          <br />
        </>
      ) : (
        <>
          <ul className="list">
            {carrito.map((producto) => (
              <li key={producto.id} className="mb-3">
                <span className="has-text-weight-bold">{producto.title}</span> - ${producto.precio} x {producto.cantidad} = ${producto.subtotal}
                <button className="button is-danger is-small ml-3" onClick={() => quitarDelCarrito(producto.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <p className="has-text-weight-bold">Total del Carrito: ${obtenerPrecioTotal()}</p>
          <p>Cantidad de productos: {obtenerCantidadTotal()}</p>
          <div className="buttons mt-4">
            <button className="button is-primary" onClick={manejarRealizarCompra}>Realizar Compra</button>
            <button className="button is-info" onClick={manejarSeguirComprando}>Seguir Comprando</button>
            <button className="button is-danger" onClick={manejarFinalizarCompra}>Vaciar Carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
