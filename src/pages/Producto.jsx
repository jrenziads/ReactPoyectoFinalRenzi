import React from "react";
import { useParams, Link } from "react-router-dom";
import listaProductos from "../data";
import "./Producto.css";

function Producto() {
  const { productoId } = useParams();
  const producto = listaProductos.find((producto) => producto.id == productoId);

  const { thumbnailUrl, title, precio, tipo, descripcion } = producto;

  return (
    <div className="producto-container">
      <img src={thumbnailUrl} alt="" className="producto-img" />
      <div className="producto-info">
        <h2>Vehiculo: {title}</h2>
        <h2>Precio: $ {precio}</h2>
        <h2>Descripcion: {descripcion}</h2>
        <h3>ID = {productoId}</h3>
        <Link to="/productos">Volver</Link>
      </div>
    </div>
  );
}

export default Producto;
