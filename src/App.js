import Navbar from "./componentes/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormularioLogin from "./componentes/formularios/formularioLogin"
// import FormularioRegistrarse from "./componentes/formularios/formularioRegistrarse"
import { useEffect, useState } from "react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
// import { Toast } from "bootstrap";
import Toast from "./componentes/toast/toast.jsx";
import Listado from "./componentes/Listado/Listado.jsx";
import ItemCount from "./componentes/ItemCount/ItemCount"
import './App.css';
import Item from "./componentes/Item/Item";


function App() {
  

  const [mensaje, setMensaje] = useState("Hola");
  const [isOpen, setIsOpen] = useState(false);
  const [estado, setEstado] = useState("");
  const [products, setProducts] = useState();
  const [valor, setValor] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0)
  const [lista, setLista] = useState([])

  useEffect(() => ( setTotalProducts (lista.length)),[lista])

  

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
      <Navbar texto="Tienda Virtual" numero={1} valor={true}>
        <h1>Children1</h1>
        {/* <h1>Children2</h1> */}
      </Navbar>
      <br />
      <br />
     
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Nuestros Productos</h1>
        <div className="App">
          <h1>Contador</h1>
          <h2>{valor}</h2>
        </div>

        {products ? <Listado  setLista={setLista} products={products} /> : <h2>Loading...</h2>}
<Item/>
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
