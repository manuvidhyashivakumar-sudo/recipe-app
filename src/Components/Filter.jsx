function Filter({ categories, selected, setSelected }) {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="border p-3 rounded w-full"
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option key={cat.strCategory} value={cat.strCategory}>
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
}

export default Filter;