import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export const Texto1 = () =>{
    return <h1> Texto1</h1>
}
// export const Texto2 = () =>{
//     return <h1> Texto2</h1>
// }

function NavScrollExample({ texto, numero, valor, sumar, children }) {
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    <CartWidget>
      {/* <h1 className="titulo">{texto}</h1> */}

      {/* <Texto1 />
      <Texto2 /> */}

      </CartWidget>
      <CartWidget />
      
      {/* {children} */}
    </Navbar>
  );
}

export default NavScrollExample;
