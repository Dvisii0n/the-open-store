import { useFetchURL } from "../../scripts/hooks.js";
import StoreSidebarStyles from "./StoreSidebar.module.css";

function StoreSidebar({ setProductsURL, currentCategory }) {
  const url = "https://dummyjson.com/products/categories";
  const { data: categories, error } = useFetchURL(url);

  if (error) return <p>A network error has ocurred</p>;

  return (
    <div className={StoreSidebarStyles.sidebar}>
      <div className={StoreSidebarStyles.sidebarLabel}>Shop by category</div>
      {categories ? (
        <>
          {/* default all category */}
          <p
            onClick={() => setProductsURL(`https://dummyjson.com/products`)}
            className={
              currentCategory === "products"
                ? `${StoreSidebarStyles.category} ${StoreSidebarStyles.active}`
                : StoreSidebarStyles.category
            }
          >
            All
          </p>
          {categories.map((category) => (
            <p
              key={category.slug}
              onClick={() =>
                setProductsURL(
                  `https://dummyjson.com/products/category/${category.slug}`,
                )
              }
              className={
                currentCategory === category.slug
                  ? `${StoreSidebarStyles.category} ${StoreSidebarStyles.active}`
                  : StoreSidebarStyles.category
              }
            >
              {category.name}
            </p>
          ))}
        </>
      ) : (
        <p className={StoreSidebarStyles.loading}>Loading categories...</p>
      )}
    </div>
  );
}

export default StoreSidebar;
