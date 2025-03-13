const Header = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="center sm:w-fit max-sm:w-full min-w-fit backdrop-blur-sm border-2 border-gray-900 rounded-xl py-3 sm:px-3">
      <div className="flex sm:gap-5 align-middle justify-around ">
        <a
          onClick={() => setScreen("projects")}
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Projects
        </a>
        <a
          onClick={() => setScreen("about")}
          className="border-black cursor-pointer hover:animate-pulse"
        >
          About
        </a>
        <a
          onClick={() => setScreen("contact")}
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Contact
        </a>
        <a
          onClick={() => setScreen("notes")}
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Notes
        </a>
        <a
          onClick={() => setScreen("watchlist")}
          className="border-black cursor-pointer hover:animate-pulse"
        >
          Watchlist
        </a>
      </div>
    </div>
  );
};

export default Header;
