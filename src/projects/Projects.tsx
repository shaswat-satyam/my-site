import { useState } from "react";

export default function projects() {
  const [more, setMore] = useState(false);
  return (
    <div className="backdrop-blur-sm p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
      <h1 className="font-mono text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
        HTMX Todo
      </h1>
      <div className="flex flex-col gap-5">
        <iframe
          src="https://htmx-todo-575602528238.us-central1.run.app/"
          height={250}
          className="rounded"
        />
        <div>
          <div className="flex flex-col gap-3">
            <p>Basic Todo App using HTMX</p>
            <h1 className="font-bold">Tech stack</h1>
            <ul className="flex justify-around">
              <li>Javascript Language</li>
              <li>HTMX Library</li>
              <li>Express Server</li>
              <li>Podman Container</li>
              <li>Google Cloud Provider</li>
            </ul>
            <div className="flex justify-between mb-5">
              <a
                href="https://htmx-todo-575602528238.us-central1.run.app/"
                target="_blank"
              >
                Link to App
              </a>
              <a
                href="https://hub.docker.com/r/shaswat51/htmx-todo"
                target="_blank"
              >
                Link to Image
              </a>
            </div>
          </div>
          <div className="flex gap-5 mt-1/2  justify-center">
            <img
              className="h-1/2 w-1/3"
              src="./src/assets/project/htmx/htmx.png"
              alt="HTMX logo"
            />
            <img
              src="./src/assets/project/htmx/express.png"
              alt="Express logo"
              className="w-1/3 h-1/2 "
            />
            <img
              className="w-1/3 h-1/2"
              src="./src/assets/project/htmx/podman.svg"
              alt="Podman logo"
            />
          </div>
        </div>
        {more ? (
          <>
            <p>
              In recent days I have been learning HTMX. Now first why?, My
              answer why not? Okay, HTMX allows for simpler SPAs lifecycle.
            </p>
            <p>
              In Short, it allows for the use HTML RESTful actions to change the
              html at the fly and simplifies web applications working and
              development.
            </p>
            <div>
              <p></p>
            </div>
            <button
              className="inline-block w-auto text-center min-w-[200px] px-6 py-4  transition-all  text-white bg-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-gray-500  shadow-neutral-800 font-bold text-xl hover:shadow-2xl hover:shadow-neutral-800 hover:-tranneutral-y-px"
              onClick={() => setMore(false)}
            >
              Read Less
            </button>
          </>
        ) : (
          <button
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4  transition-all  text-white bg-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-gray-500  shadow-neutral-800 font-bold text-xl hover:shadow-2xl hover:shadow-neutral-800 hover:-tranneutral-y-px"
            onClick={() => setMore(true)}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
}
