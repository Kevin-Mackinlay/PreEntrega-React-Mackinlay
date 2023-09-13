export const Item = ({ user }) => {
  // console.log(user)
  // console.log(user)
 
  return (
    <div>
      <h1>{user.nombre}</h1>
      <h2>{user.id}</h2>
    </div>
    //el user que llega es un objeto con sus propiedades que s emuestran en el DOM
  );
};
