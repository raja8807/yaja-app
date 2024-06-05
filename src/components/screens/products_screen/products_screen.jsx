import React from "react";

import styles from "./products_screen.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const Product = () => {
  return (
    <div className={styles.product}>
      <CustomContainer>abdcu</CustomContainer>
    </div>
  );
};

const ProductsScreen = () => {
  return (
    <main className={styles.products}>
      <Product />
      <Product />
    </main>
  );
};

export default ProductsScreen;
