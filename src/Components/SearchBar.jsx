const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="w-full p-3 rounded-lg border outline-none"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;