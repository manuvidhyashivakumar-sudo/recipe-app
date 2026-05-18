const CategoryFilter = ({
  categories,
  onSelect,
}) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="border p-3 rounded"
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option
          key={cat.idCategory}
          value={cat.strCategory}
        >
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;