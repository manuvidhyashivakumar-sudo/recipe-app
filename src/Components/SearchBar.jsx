function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-3 rounded w-full"
    />
  );
}

export default SearchBar;