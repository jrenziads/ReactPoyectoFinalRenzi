import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const quitarDelCarrito = (productId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const obtenerPrecioTotal = () => {
    return carrito.reduce((total, item) => total + item.subtotal, 0);
  };

  const realizarCompra = (idCompra) => {

    console.log('Compra realizada con éxito. ID de compra:', idCompra);

    vaciarCarrito();
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, obtenerCantidadTotal, obtenerPrecioTotal, realizarCompra }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser utilizado dentro de CarritoProvider');
  }
  return context;
};
