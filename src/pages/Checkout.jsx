import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { useCarrito } from '../components/CarritoContext';
import { guardarCompraEnFirestore } from '../config/firebase'; 

const Checkout = () => {
  const { idCompra, finalizarCompra } = useCarrito();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [idCompraRealizada, setIdCompraRealizada] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();

    // Lógica para guardar en Firestore
    await guardarCompraEnFirestore({
      nombre,
      apellido,
      email,
      telefono,
    }, idCompra);

    // Actualizar estados
    setCompraRealizada(true);
    setIdCompraRealizada(idCompra);

    // Finalizar compra
    finalizarCompra();
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-2">Formulario de Checkout</h2>
          
          {compraRealizada ? (
            <>
              <p className="subtitle">Compra realizada con éxito</p>
              <p className="subtitle">ID de la compra: {idCompraRealizada}</p>
            </>
          ) : (
            <form onSubmit={manejarSubmit}>
              {/* Campos del formulario */}
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input className="input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
              </div>

              <div className="field">
                <label className="label">Apellido</label>
                <div className="control">
                  <input className="input" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="field">
                <label className="label">Teléfono</label>
                <div className="control">
                  <input className="input" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">Finalizar Compra</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
