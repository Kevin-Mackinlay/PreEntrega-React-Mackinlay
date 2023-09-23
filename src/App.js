import Navbar from "./componentes/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormularioLogin from "./componentes/formularios/formularioLogin"
// import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse"
import { useEffect, useState } from "react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
// import { Toast } from "bootstrap";
import Toast from "./componentes/toast/toast.jsx";
import Listado from "./componentes/Listado/Listado.jsx";
import ItemCount from "./componentes/ItemCount/ItemCount";

const data = [
  {
    title: "Post 1",
    body: "Body 1",
  },
  {
    title: "Post 2",
    body: "Body 2",
  },
  {
    title: "Post 3",
    body: "Body 3",
  },
];

function App() {
  

  const [mensaje, setMensaje] = useState("Hola");
  const [isOpen, setIsOpen] = useState(false);
  const [estado, setEstado] = useState("");
  const [products, setProducts] = useState();
  const [valor, setValor] = useState(0);

  

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setMensaje("Posts cargados");
        setEstado("success");
        setIsOpen(true);
        console.log(products);
      })
      .catch((error) => {
        setMensaje("Hubo un error con el servicio");
        setEstado("error");
        setIsOpen(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 3000);
  },[])

  return (
    <div>
      <Navbar texto="Tienda Sports" numero={1} valor={true}>
        <h1>Children1</h1>
        {/* <h1>Children2</h1> */}
      </Navbar>
      <br />
      <br />
      {/* <div style={{ marginLeft: "30px" }}>
        <h1>Contador</h1>
        {contadorSinEstado}
        <button onClick={sumarSinEstado} style={{ marginLeft: "30px" }}>
          {" "}
          Boton s/estado
        </button>
        <br />
        <div style={{ marginLeft: "30px" }}>
          <strong>{contadorSinEstado}</strong>
        </div>
        <br />
        <button onClick={sumaConEstado} style={{ marginLeft: "30px" }}>
          Boton c/estado
        </button>
        <br />
        <div style={{ marginLeft: "30px" }}>
          <strong>{contador}</strong>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <ItemListContainer greeting=" Bienvenido al itemListContainer" />
        </div>
      </div> */}
      {/* 
       <div>
      <h1 className="titulo" style={{padding:10}}> Mi Proyecto</h1>
      {tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}
    </div> */}
      <div className="App">
        <h1>Nuestros Productos</h1>
        {
          products ?  <Listado products={products} /> : <h2>Loading...</h2>
        }
       
        <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} />
      </div>

      <div className="App">
        <h1>Contador</h1>
        <h2>{valor}</h2>
       
      </div>


    </div>


  );
}
export default App;
