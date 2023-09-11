import React from 'react'

const CartWidget = ({children}) => {
    console.log(children);
  return (
    <>
      <div>Children</div>
      <img src="https://img.freepik.com/premium-vector/quick-shopping-cart-icon_414847-514.jpg?w=2000" alt='icono de carrito' width={100} height={100}></img>
    </>
  );
}

export default CartWidget