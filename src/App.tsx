import Header from "./components/Header";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Subjects from "./NotesSection/Subjects";
import WatchList from "./WatchlistSection/WatchList";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("about");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/projects"
          element={
            <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
                <Header />
                <Projects />
              </div>
            </div>
          }
        />
        <Route
          path="/notes"
          element={
            <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
                <Header />
                <Subjects />
              </div>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
                <Header />
                <Contact />
              </div>
            </div>
          }
        />
        <Route
          path="/watchlist"
          element={
            <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
                <Header />
                <WatchList />
              </div>
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div className="absolute top-0 z-[-2] min-h-screen min-w-full h-fit w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className="p-5 z-10 text-white flex justify-center flex-col gap-5">
                <Header />
                <Profile />
                <Body />
              </div>
            </div>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
