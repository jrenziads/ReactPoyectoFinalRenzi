import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getDoc, doc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useCarrito } from '../components/CarritoContext';
import './Producto.css';
import 'bulma/css/bulma.min.css';

function Producto() {
  const navigate = useNavigate();
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    const obtenerDatosProducto = async () => {
      try {
        const productoDoc = await getDoc(doc(collection(db, 'items'), productoId));

        if (productoDoc.exists()) {
          setProducto({ id: productoDoc.id, ...productoDoc.data() });
        } else {
          console.error('No se encontró el producto con ID:', productoId);
        }
      } catch (error) {
        console.error('Error al obtener datos del producto:', error);
      }
    };

    obtenerDatosProducto();
  }, [productoId]);

  const manejarAgregarAlCarrito = () => {
    if (producto) {
      const productoEnCarrito = {
        id: producto.id,
        title: producto.title,
        precio: parseFloat(producto.precio),
        cantidad: parseFloat(cantidad),
        subtotal: parseFloat(cantidad) * parseFloat(producto.precio),
      };

      agregarAlCarrito(productoEnCarrito);
      navigate('/carrito');
    }
  };

  return (
    <div className="producto-container">
      {producto ? (
        <>
          <img src={producto.thumbnailUrl} alt="" className="producto-img" />
          <div className="producto-info">
            <h2>Vehiculo: {producto.title}</h2>
            <h2>Precio: $ {producto.precio}</h2>
            <h2>Descripcion: {producto.descripcion}</h2>
            <h3>ID = {producto.id}</h3>
            <label>
              Cantidad:
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </label>
            <button onClick={manejarAgregarAlCarrito}>Agregar al Carrito</button>
            <br />
            <br />
            <Link to="/productos">Volver</Link>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Producto;
