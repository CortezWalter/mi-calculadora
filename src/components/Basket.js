import React from 'react';

export default function Basket(props) {
  const { itemsCarrito, onAdd, onRemove } = props;
  const itemsPrecios = itemsCarrito.reduce((a, c) => a + c.qty * c.price, 0);
  const impuestos = itemsPrecios * 0.14;
  const precioEnvio = itemsPrecios > 2000 ? 0 : 20;
  const precioTotal = itemsPrecios + impuestos + precioEnvio;
  return (
    <aside className="block col-1">
      <h2>Carrito de compras</h2>
      <div>
        {itemsCarrito.length === 0 && <div>No hay productos seleccionados</div>}
        {itemsCarrito.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {itemsCarrito.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio Neto</div>
              <div className="col-1 text-right">${itemsPrecios.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Impuestos</div>
              <div className="col-1 text-right">${impuestos.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Precio de envio</div>
              <div className="col-1 text-right">
                ${precioEnvio.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${precioTotal.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Felicidades por tu compra!')}>
                Comprar
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
