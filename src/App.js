import Navbar from "./componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
/* import FormularioLogin from "./componentes/formularios/formularioLogin"
import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse" */
import { useState } from "react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx"


function App() {
  /*  let tipoFormulario = "login"; */

  const [contador, setContador] = useState(0);
  // console.log(contador);
  // console.log(setContador);

  let contadorSinEstado = 0

  

  function sumar() {
   
    contadorSinEstado++
    //  console.log(contadorSinEstado);
  }

  return (
    <div>
      <Navbar texto="soy un texto" numero={1} valor={true}>
        <h1>Children1</h1>
        {/* <h1>Children2</h1> */}
      </Navbar>
      <br />
      <br />
      <div>
        <h1>Contador</h1>
        {contadorSinEstado}
        <button onClick={sumar}> Click</button>
        <ItemListContainer greeting= "Bienvenidos a itemListContainer"/>
      </div>
    </div>
    /*   <div>
      <h1 className="titulo" style={{padding:10}}> Mi Proyecto</h1>
      {tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}
    </div> */
  );
  }
export default App;
