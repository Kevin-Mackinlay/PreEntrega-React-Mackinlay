import Navbar from "./componentes/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormularioLogin from "./componentes/formularios/formularioLogin"
// import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse"
import { useEffect, useState } from "react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
// import { Toast } from "bootstrap";
import Toast from "./componentes/toast/toast.jsx";
import Listado from "./componentes/Listado/Listado.jsx";

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
  // let tipoFormulario = "login";

  const [contador, setContador] = useState(0);
  // console.log(contador);
  // console.log(setContador);

  let contadorSinEstado = 0;

  function sumarSinEstado() {
    contadorSinEstado++;
    //  console.log(contadorSinEstado);
  }

  function sumaConEstado() {
    setContador(contador + 1);
  }

  const [mensaje, setMensaje] = useState("Hola");
  const [isOpen, setIsOpen] = useState(false);
  const [estado, setEstado] = useState("");
  const [posts, setPosts] = useState();

  // const products = [
  //   { id: 1, nombre: "remera", descripcion: "material liso", stock: 10 },
  //   { id: 1, nombre: "short", descripcion: "material liso", stock: 10 },
  //   { id: 1, nombre: "campera", descripcion: "material liso", stock: 10 },
  //   { id: 1, nombre: "camiseta", descripcion: "material liso", stock: 10 },
  // ];

  // const getProducts = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(products);
  //   }, 3000);
  // });

  // getProducts.then((data) => {
  //   console.log(data);
  //   console.log("Aca termina promesa");
  // });

  const getPosts = () => {
    fetch("https://jsonplaceholde.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setMensaje("Posts cargados");
        setEstado("success");
        setIsOpen(true);
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
      getPosts();
    }, 3000);
  });

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
        <h1>Promises</h1>
        <Listado />
        <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} />
      </div>
    </div>
  );
}
export default App;
