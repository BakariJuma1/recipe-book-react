function SearchRecipe({ onSearch }) {
  // console.log("Current search term:", searchTerm);
  function handleChange(e) {
    onSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder="Search for a recipe..."
        className="searchInput"
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchRecipe;
