

import './App.css';
import { useState } from 'react';
import Header from './components/header'
import ProductList from './components/products/productList';

function App() {
  //carrito
  const [allProducts,setAllProducts]=useState([])

  return (
    <>
    <Header
    allProducts={allProducts}
    setAllProducts={setAllProducts}


    />
      <ProductList
      
      allProducts={allProducts}
      setAllProducts={setAllProducts}
     
      />
    </>
  );
}

export default App;
