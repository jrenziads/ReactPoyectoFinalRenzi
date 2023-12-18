import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from 'react-router-dom';
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import "./App.css";
import Layout from "./pages/Layout";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";

function App() {
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

  const realizarCompra = (idCompra) => {
    // Lógica para realizar la compra (por ejemplo, enviar la información al servidor)
    console.log('Compra realizada con éxito. ID de compra:', idCompra);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:productoId" element={<Producto agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="carrito" element={<Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} vaciarCarrito={vaciarCarrito} realizarCompra={realizarCompra} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;