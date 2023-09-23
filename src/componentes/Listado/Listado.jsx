const Listado = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((products) => (
        <li key={products.id}>
          {products.title}

          {/* <p>{post.body}</p> */}
        </li>
      ))}
    </div>
  );
};

export default Listado;
