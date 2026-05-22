import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Recipe App
        </Link>

        <Link
          to="/favorites"
          className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;