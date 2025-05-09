import Header from "./components/Header";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Subjects from "./NotesSection/Subjects";
import WatchList from "./WatchlistSection/WatchList";
import Contact from "./contact/Contact";
import CurrentObession from "./currentObession/CurrentObession";
import Projects from "./projects/Projects";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("about");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
          <Header setScreen={setCurrentScreen} />
          {currentScreen == "about" ? (
            <>
              <Profile /> <Body />
            </>
          ) : (
            <></>
          )}
          {currentScreen == "projects" ? <Projects /> : <></>}
          {currentScreen == "contact" ? <Contact /> : <></>}
          {currentScreen == "notes" ? <Subjects /> : <></>}
          {currentScreen == "watchlist" ? <WatchList /> : <></>}
          {currentScreen == "current" ? <CurrentObession /> : <></>}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
