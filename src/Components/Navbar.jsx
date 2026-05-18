import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">
        Recipe App
      </Link>

      <Link to="/favorites">
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;