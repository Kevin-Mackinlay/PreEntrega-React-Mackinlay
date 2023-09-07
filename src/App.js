import Navbar from "./componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
/* import FormularioLogin from "./componentes/formularios/formularioLogin"
import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse" */

function App() {
 /*  let tipoFormulario = "login"; */
  return (
    <div>
      <Navbar texto="soy un texto" />
    </div>
    /*   <div>
      <h1 className="titulo" style={{padding:10}}> Mi Proyecto</h1>
      {tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}
    </div> */
  );
}
export default App;
