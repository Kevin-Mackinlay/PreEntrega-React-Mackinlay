export const Item = ({ products }) => {
  // console.log(user)
  // console.log(user)
 
  return (
    <div>
      <h1>{products.nombre}</h1>
      <h2>{products.id}</h2>
    </div>
    //el user que llega es un objeto con sus propiedades que s emuestran en el DOM
  );
};

