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
  const [numTarjeta, setNumTarjeta] = useState('');
  const [vencimiento, setVencimiento] = useState('');
  const [codigoVerificacion, setCodigoVerificacion] = useState('');
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [idCompraRealizada, setIdCompraRealizada] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const idCompraFirestore = await guardarCompraEnFirestore({
        nombre,
        apellido,
        email,
        telefono,
        numTarjeta,
        vencimiento,
      
      });

      setIdCompraRealizada(idCompraFirestore);
      setCompraRealizada(true);

      finalizarCompra();
    } catch (error) {
      console.error('Error al procesar la compra:', error);
    }
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-2">Formulario de Checkout</h2>
          <br />
          {compraRealizada ? (
            <>
              <p className="subtitle">Compra realizada con éxito</p>
              <p className="subtitle">ID de la compra: {idCompraRealizada}</p>
              <br />
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
                <label className="label">Número de Tarjeta</label>
                <div className="control">
                  <input className="input" type="text" value={numTarjeta} onChange={(e) => setNumTarjeta(e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" />
                </div>
              </div>

              <div className="field">
                <label className="label">Vencimiento (MM/AAAA)</label>
                <div className="control">
                  <input className="input" type="text" value={vencimiento} onChange={(e) => setVencimiento(e.target.value)} placeholder="MM/AAAA" />
                </div>
              </div>

              <div className="field">
                <label className="label">Código de Verificación (Este dato no sera almacenado)</label>
                <div className="control">
                  <input className="input" type="text" value={codigoVerificacion} onChange={(e) => setCodigoVerificacion(e.target.value)} maxLength="3" />
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
