import Item from "../Item/Item";

const Listado = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((products) => (
        <div key={products.id}>
          {products.title}

         <Item/>
        </div>
      ))}
    </div>
  );
};

export default Listado;
