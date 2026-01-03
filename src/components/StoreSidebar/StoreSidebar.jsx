import { useFetchURL } from "../../scripts/hooks.js";
import StoreSidebarStyles from "./StoreSidebar.module.css";

function StoreSidebar() {
  const url = "https://dummyjson.com/products/categories";
  const { data: categories, error } = useFetchURL(url);

  if (error) return <p>A network error has ocurred</p>;

  return (
    <div className={StoreSidebarStyles.sidebar}>
      {categories ? (
        categories.map((category) => (
          <p key={category.slug} className={StoreSidebarStyles.category}>
            {category.name}
          </p>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}
export default StoreSidebar;
