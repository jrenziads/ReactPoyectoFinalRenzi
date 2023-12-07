import React, { useState, useEffect } from 'react';
import listaProductos from '../data';
import './Productos.css';
import { Link, useLocation } from 'react-router-dom';


function Productos() {
  const location = useLocation();
  const [filtroTipo, setFiltroTipo] = useState('');

 
  useEffect(() => {
    const tipoParam = new URLSearchParams(location.search).get('tipo');
    setFiltroTipo(tipoParam || ''); 
  }, [location.search]);

  const productosFiltrados =
    filtroTipo === '' ? listaProductos : listaProductos.filter((producto) => producto.tipo === filtroTipo);

  return (
    <div>
      <h2>Elegi tu proximo TOYOTA</h2>
      <div>
        <button onClick={() => setFiltroTipo('')}>Todos</button>
        <button onClick={() => setFiltroTipo('Sedan')}>Sedan</button>
        <button onClick={() => setFiltroTipo('SUV')}>SUV</button>
        <button onClick={() => setFiltroTipo('PickUP')}>PickUP</button>
      </div>
      <div className="galeria">
        {productosFiltrados.map((producto) => (
          <article key={producto.id}>
            <h4>Modelo: {producto.title}</h4>
            <h4>Tipo Vehiculo: {producto.tipo}</h4>
            <img src={producto.thumbnailUrl} alt={producto.title} />
            <Link to={`/productos/${producto.id}`}>Detalle</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Productos;
