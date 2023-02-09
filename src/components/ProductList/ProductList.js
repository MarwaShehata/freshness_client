import React from 'react'
import ProductCard from './../sharedComponents/ProductCard/ProductCard';
import styles from './ProductList.module.css'
function ProductList({products}) {
 // console.log(products)
  const productsList = products.map(product=>{
    return <ProductCard key={product._id} product={product}/>
 
  })
  return <>
  <div className={` ${styles.container}`}>
 <div  className={`container my-5 px-0 ` }>
 <div className={`row justify-content-start  `} >
   {productsList}
    </div>
 </div>
  
  </div>
  </>
   
  
}

export default ProductList