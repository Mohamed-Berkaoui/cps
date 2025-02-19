function Filter({setSearch}) {
    function handleSearch(e){
        e.preventDefault()
        setSearch({title:e.target.title.value,rating:e.target.rating.value})
    }
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="title" />
      <input type="number" name="rating" />
      <button type="submit">search</button>
    </form>
  );
}

export default Filter;
