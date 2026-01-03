import StoreStyles from "./Store.module.css";
import StoreSidebar from "../StoreSidebar/StoreSidebar.jsx";
import { useState } from "react";
import { useFetchURL } from "../../scripts/hooks.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

function Store() {
  const [productsURL, setProductsURL] = useState(
    "https://dummyjson.com/products",
  );

  function extractCategory() {
    const urlArr = productsURL.split("/");
    return urlArr[urlArr.length - 1];
  }

  const currentCategory = extractCategory();
  const { data, error } = useFetchURL(productsURL);
  const products = data ? data.products : null;

  if (error) return <p>{error.message}</p>;

  return (
    <div className={StoreStyles.store}>
      <StoreSidebar
        setProductsURL={setProductsURL}
        currentCategory={currentCategory}
      />
      <div className={StoreStyles.products}>
        {products ? (
          products.map((prodInfo) => (
            <ProductCard key={prodInfo.id} productInfo={prodInfo} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Store;
