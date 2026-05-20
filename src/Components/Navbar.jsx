import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">
        Recipe App
      </Link>

      <Link to="/favorites" className="font-semibold">
        Favorites
      </Link>
    </nav>
  );
}

export default Navbar;