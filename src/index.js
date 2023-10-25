import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
const pizzaData = [
  {
    name: 'Focaccia',
    price: 6,
    souldout: false,
  },
  {
    name: 'Pizza Margerita',
    price: 10,
    souldout: false,
  },
  {
    name: 'Pizza Spinaci',
    price: 12,
    souldout: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  //color: 'red', fontSize: '32px', textTransform: 'uppercase'
  return (
    <>
      <h1 style={style} className>
        First React Application
      </h1>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authenticate Italian Cuisine</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on the menu</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.souldout ? 'sold-out' : ''}`}>
      <div>
        <h2>{pizzaObject.name}</h2>

        {/* {pizzaObject.souldout ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )} */}
        <span>{pizzaObject.souldout ? 'Sold Out' : pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 9;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;

  return (
    <footer>
      {isOpen ? (
        <Order closehour={closehour} openhour={openhour} />
      ) : (
        <p>
          Open between {openhour}:00 to {closehour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement('footer', null, 'We are open!' )
}

function Order({ closehour, openhour }) {
  return (
    <div>
      <p>
        We are open from {openhour}:00 to {closehour}:00
      </p>
      <button>Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
