import {Item} from "../Item/Item";
import { useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [users, setUsers] = useState({});
  const usuarios = [
    {
      id: 1,
      nombre: "carlos",
    },
    {
      id: 2,
      nombre: "nicolas",
    },
    {
      id: 3,
      nombre: "pablo",
    },
  ];

  return (
    <div>
      <h2>{greeting}</h2>
      {/* //pro de APP.JS */}
      <button style={{marginLeft:"30px"}}
        onClick={() => {
          setUsers(usuarios.find((us) => us.id === 2));
        }}
      >
        CLICK2
      </button>
      {/* //al apretar el boton el estado setea el usuario encontrado con el metodo find */}
      <div>
        <Item user={users} />
        {/* //pasa por prop el estado */}
      </div>
    </div>
  );
};

export default ItemListContainer;
