import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="center sm:w-fit max-sm:w-full min-w-fit backdrop-blur-sm border-2 border-gray-900 rounded-xl py-3 sm:px-3">
      <div className="flex sm:gap-5 align-middle justify-around ">
        <Link
          to="/projects"
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Projects
        </Link>
        <Link
          to="/"
          className="border-black cursor-pointer hover:animate-pulse"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Contact
        </Link>
        <Link
          to="/notes"
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Notes
        </Link>
        <Link
          to="/watchlist"
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default Header;
