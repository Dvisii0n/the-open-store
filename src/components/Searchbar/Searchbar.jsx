import SearchbarStyles from "./Searchbar.module.css";
function Searchbar() {
  return (
    <div className={SearchbarStyles.searchbar}>
      <label className={SearchbarStyles.label} htmlFor="searchInput">
        Search
      </label>
      <input
        className={SearchbarStyles.searchInput}
        name="searchInput"
        id="searchInput"
      ></input>
      <button className={SearchbarStyles.searchButton}>Go</button>
    </div>
  );
}
export default Searchbar;
