import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from './CarritoContext';

const CartWidget = () => {
  const { obtenerCantidadTotal } = useCarrito();

  return (
    <div>
      <Link to="/carrito">
        <img
          src="https://raw.githubusercontent.com/jrenziads/ReactPoyectoFinalRenzi/main/src/img/carrito-de-compras.png"
          alt="Carrito de Compras"
          width="50"
          height="50"
        />
      </Link>
      <span>{obtenerCantidadTotal()}</span>
    </div>
  );
};

export default CartWidget;
