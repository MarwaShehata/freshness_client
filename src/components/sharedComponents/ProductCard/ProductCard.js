import React from "react";
import styles from "./ProductCard.module.css";
function ProductCard({ product }) {
  console.log(product);
  return (
    <>
      <div className={`col-lg-3 col-md-6 mb-sm-4 col-sm-12 `}>
        <div className={`${styles.productContainer} `}>
          
            {/* IMAGE PLACEHOLDER */}
            <div className={`${styles.imagePlaceholder} `}>{/* <img > */}</div>
            {/* CONTENT PLACEHOLDER */}
            <div className={`${styles.productDetailes} `}>
              <h3 className={`${styles.productTitle}`}>{product.name}</h3>
              <p className={`${styles.productDescription}`}>
                Space for a small product description{" "}
              </p>
              <div className="d-flex justify-content-between align-items-center ">
                <h4 className={`${styles.productPrice}`}>
                  {product.price} USD
                </h4>
                <button className={`${styles.addToCartButton} px-2 py-2`}>
                  Buy now
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default ProductCard;
