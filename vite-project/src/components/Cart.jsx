import React from 'react';

const Cart = ({ cart = [], Removeitem }) => {
  return (
    <div>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width={100} />
              <p>{item.name}</p>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => {
  console.log("Removing item at index:", index);
  Removeitem(index);
}}>
  Remove
</button>

            </li>
          ))}
        </ul>
      )}
      <h2>Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</h2>
    </div>
  );
};

export default Cart;
