import React from "react";
import  Item  from '../Item/Item';
import { useState} from 'react'


const ItemListContainer = ({ greeting }) => {

  const [users, setUsers] = useState([])
  const productos = [
    {
      id: 1,
      nombre: "juan",
    },
    {
      id: 2,
      nombre: "jose",
    },
  ];

 const newUser =  productos.forEach((user) => user.id === 1)

 function cambio () {
  setUsers(newUser)
  console.log(users);
 }

  return (
    <div>
      <h2>{greeting}</h2>
      <button onClick={cambio}>CLICK2</button>
      <div>
        <Item user={users} />
      </div>
    </div>
  );
};

export default ItemListContainer;
