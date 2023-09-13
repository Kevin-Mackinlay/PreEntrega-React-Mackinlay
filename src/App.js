import Navbar from "./componentes/NavBar/NavBar";
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

  

  function sumarSinEstado() {
   
    contadorSinEstado++
    //  console.log(contadorSinEstado);
  }

  function sumaConEstado(){
    setContador(contador+1)
  }

  return (
   
    <div>
      <Navbar texto="Tienda Sports" numero={1} valor={true}>
        <h1>Children1</h1>
        {/* <h1>Children2</h1> */}
      </Navbar>
      <br />
      <br />
      <div>
        <h1>Contador</h1>
        {contadorSinEstado}
        <button onClick={sumarSinEstado}> Boton sin estado</button>
        <br />
        <div style={{ marginLeft: "30px" }}>
          <strong>{contadorSinEstado}</strong>
        </div>
        <br />
        <button onClick={sumaConEstado}>BOTON CON ESTADO</button>
        <br />
        <div style={{ marginLeft: "30px" }}>
          <strong>{contador}</strong>
        </div>
        <ItemListContainer greeting="Bienvenidos a itemListContainer" />
      </div>
  
    {/* /*   <div>
      <h1 className="titulo" style={{padding:10}}> Mi Proyecto</h1>
      {tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}
    </div> */}
    </div> 
   
  );
  }
export default App;
