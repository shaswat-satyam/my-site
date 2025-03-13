const Header = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="center w-fit flex backdrop-blur-sm border-2 border-gray-900 rounded-xl p-3">
      <div className="flex gap-9 cursor-pointer">
        <a
          onClick={() => setScreen("projects")}
          className="border-black  hover:animate-pulse"
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
      </div>
    </div>
  );
};

export default Header;
