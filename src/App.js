import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [itemsCarrito, setitemsCarrito] = useState([]);
  const onAdd = (product) => {
    const exist = itemsCarrito.find((x) => x.id === product.id);
    if (exist) {
      setitemsCarrito(
        itemsCarrito.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setitemsCarrito([...itemsCarrito, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = itemsCarrito.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setitemsCarrito(itemsCarrito.filter((x) => x.id !== product.id));
    } else {
      setitemsCarrito(
        itemsCarrito.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countitemsCarrito={itemsCarrito.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          itemsCarrito={itemsCarrito}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
