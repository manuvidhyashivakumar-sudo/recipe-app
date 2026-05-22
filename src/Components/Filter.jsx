const Filter = ({ categories, selected, setSelected }) => {
  return (
    <select
      className="w-full p-3 rounded-lg border"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option key={cat.strCategory} value={cat.strCategory}>
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
};

export default Filter;