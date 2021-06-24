import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Sana costumbre</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrito{' '}
          {props.countitemsCarrito ? (
            <button className="badge">{props.countitemsCarrito}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}
