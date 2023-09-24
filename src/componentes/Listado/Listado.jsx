const Listado = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((products) => (
        <div key={products.id}>
          {products.title}
{/* <button onClick={() => } */}
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Listado;
