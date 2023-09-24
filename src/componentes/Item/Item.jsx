import { useState} from "react";


const Item = ({title, setLista}) =>{
const [contador , setContador] = useState(0)
const main = (action) =>{
  switch (action){
    case "suma":
      setContador(contador + 1)
      break;
      case "resta":
        setContador(contador - 1)
        break;
        case "reset":
          setContador(0)
          break;
          case "add":
            setLista(prev => [...prev, {producto:title, cantidad: contador}])
            break
  }
}

return(
  <div>
    <h1> {title} - {contador}</h1>
    <button onClick={() => main("suma")}>Sumar</button>
    <button onClick={() => main("resta")}>Restar</button>
    <button onClick={() => main("reset")}>Eliminar todo</button>
    <button onClick={() => main("add")}>Agregar</button>
  </div>
)
}

export default Item
