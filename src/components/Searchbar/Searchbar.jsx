import SearchbarStyles from "./Searchbar.module.css";
function Searchbar() {
  return (
    <input className={SearchbarStyles.searchbar} placeholder="Search"></input>
  );
}
export default Searchbar;
