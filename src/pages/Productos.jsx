import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import './Productos.css';
import { Link, useLocation } from 'react-router-dom';

function Productos() {
  const location = useLocation();
  const [filtroTipo, setFiltroTipo] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const tipoParam = new URLSearchParams(location.search).get('tipo');
    setFiltroTipo(tipoParam || '');

    const itemsCollection = collection(db, 'items');
    let q = query(itemsCollection);

    if (filtroTipo) {
      q = query(itemsCollection, where('tipo', '==', filtroTipo));
    }

    getDocs(q).then((snapshot) => {
      const productosData = [];
      snapshot.forEach((doc) => {
        productosData.push({ id: doc.id, ...doc.data() });
      });
      setProductos(productosData);
    });
  }, [location.search, filtroTipo]);

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
        {productos.map((producto) => (
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
