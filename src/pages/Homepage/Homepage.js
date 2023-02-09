import React, { useEffect, useState } from "react";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";
import Filter from "../../components/sharedComponents/Filter/Filter";
import Footer from '../../components/sharedComponents/Footer/Footer'
import axios, { isCancel, AxiosError } from "axios";
import ProductList from "../../components/ProductList/ProductList";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data.data.products);
        // console.log(products)
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <Navbar />
      <Filter />
      <ProductList products={products} />
      <Footer/>
    </>
  );
};

export default Homepage;
