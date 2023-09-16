import InputUsuario from "../inputUsuario/inputUsuario";

const FormularioRegistrarse = () => {
  return (
    <>
      <h1>REGISTRARSE</h1>
     <InputUsuario/>
      <input type="text" placeholder="Apellido"></input>
      <input type="text" placeholder="Email"></input>
    </>
  );
};


export default FormularioRegistrarse;