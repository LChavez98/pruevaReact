import './products.css'
import  {data} from './data';

const ProductList = ({allProducts,setAllProducts}) => {

  const onAddProducts = product => {
    setAllProducts([...allProducts,product]);
  };
  return (
    <div className='containerProducts'>
      {data.map(product => (
        <div className='conProducts' key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={()=>onAddProducts(product)}>Agregar</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;