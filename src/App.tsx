import Header from "./components/Header";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Subjects from "./NotesSection/Subjects";
import WatchList from "./WatchlistSection/WatchList";

import { useState } from "react";

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("about");
  return (
    <div className="absolute top-0 z-[-2] min-h-screen min-w  h-fit w-fit bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="p-5 z-10 text-white flex flex-col gap-5">
        {currentScreen == "projects" ? <Subjects /> : <></>}
        <Header setScreen={setCurrentScreen} />
        {currentScreen == "about" ? (
          <>
            <Profile /> <Body />
          </>
        ) : (
          <></>
        )}
        {currentScreen == "contact" ? <Subjects /> : <></>}
        {currentScreen == "notes" ? <Subjects /> : <></>}
        {currentScreen == "watchlist" ? <WatchList /> : <></>}
      </div>
    </div>
  );
}

export default App;
