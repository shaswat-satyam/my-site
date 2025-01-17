const Header = ({ setScreen }) => {
  return (
    <div className="center w-full backdrop-blur-sm border-2 border-gray-900 rounded-xl p-3">
      <ul className="flex gap-5 ">
        <a
          onClick={() => setScreen("profile")}
          className="border-black hover:animate-pulse"
        >
          Projects
        </a>
        <a
          onClick={() => setScreen("about")}
          className="border-black hover:animate-pulse"
        >
          About
        </a>
        <a
          onClick={() => setScreen("contact")}
          className="border-black hover:animate-pulse"
        >
          Contact
        </a>
        <a
          onClick={() => setScreen("notes")}
          className="border-black hover:animate-pulse"
        >
          Notes
        </a>
        <a
          onClick={() => setScreen("watchlist")}
          className="border-black hover:animate-pulse"
        >
          Watchlist
        </a>
        <a
          onClick={() => setScreen("current")}
          className="border-black hover:animate-pulse"
        >
          Current Obession
        </a>
      </ul>
    </div>
  );
};

export default Header;
