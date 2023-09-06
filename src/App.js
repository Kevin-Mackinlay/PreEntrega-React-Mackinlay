import "./App.css";

/* function App() {
  let logueado = true; */
//Logica sin sugar sintax
/* const estadoLogueado = () => {
    if (logueado == false) {
      return (
        <button className="">
          <p>Aceptar</p>
        </button>
      );
    } else {
      return (
        <div>
          <button className="">
            <p>Cancelar</p>
          </button>
          
        </div>
      );
    }
  }; */
/*   return (
    <div className="App">
      <h1>Mi proyecto React de CoderHouse</h1>
      {logueado == true ? (
        <button className="">
          <p>Aceptar</p>
        </button>
      ) : (
        <button className="">
          <p>Cancelar</p>
        </button>
      )}
    </div>
  );
}
 */
import FormularioLogin from "./componentes/formularios/formularioLogin"
import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse"
//componente

//componente


function App() {
  let tipoFormulario = "login";
  return (
    <div>
      <h1> Mi Proyecto</h1>
      {tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}
    </div>
  );
}
export default App;
