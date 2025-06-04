import movies from "./watched_movies.json";
import series from "./watched_shows.json";

import MovieCard from "./MovieCard";
import SeriesCard from "./SeriesCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function WatchList() {
  const [moviesCount, setMovieCount] = useState(0);
  const [moviesSort, setMoviesSort] = useState("recent");

  const [seriesCount, setSeriesCount] = useState(6);
  const [seriesSort, setSeriesSort] = useState("recent");

  const { isLoading, error, data } = useQuery({
    queryKey: ["quote"],
    queryFn: () =>
      fetch("https://api.quotable.io/random").then((res) => res.json()),
    staleTime: 60000,
    retry: 5,
    retryDelay: 1000,
    refetchOnWindowFocus: true,
  });
  return (
    <div className="flex gap-5 flex-col">
      <div className="border-2 rounded-xl p-5 backdrop-blur-sm border-gray-900">
        {error ? <div>{error.toString()}</div> : <></>}
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              {isLoading ? "Provoking Thought" : data.content}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                {isLoading ? "Some Smart Person" : data.author}
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="border-2 rounded-xl p-5 backdrop-blur-sm border-gray-900">
        <div className="flex justify-between flex-wrap gap-5">
          <h1 className="text-3xl font-bold">Movies</h1>
          <div className="inline-flex">
            <button
              onClick={() => setMoviesSort("recent")}
              disabled={moviesSort == "recent"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Recently Watched
            </button>
            <button
              onClick={() => setMoviesSort("release")}
              disabled={moviesSort == "release"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 "
            >
              Recently released
            </button>
            <button
              onClick={() => setMoviesSort("rating")}
              disabled={moviesSort == "rating"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Rating
            </button>
          </div>
          <div className="inline-flex">
            <button
              onClick={() => setMovieCount(moviesCount - 6)}
              disabled={moviesCount == 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Prev
            </button>
            <button
              onClick={() => setMovieCount(moviesCount + 6)}
              disabled={moviesCount + 6 >= movies.length}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap auto-rows-max justify-center">
          {movies
            .sort(
              moviesSort == "recent"
                ? (series1, series2) =>
                    new Date(series1.last_watched_at) <
                    new Date(series2.last_watched_at)
                      ? 1
                      : 0
                : moviesSort == "release"
                  ? (series1, series2) =>
                      new Date(series1.movie.year) <
                      new Date(series2.movie.year)
                        ? 1
                        : 0
                  : (series1, series2) =>
                      series1.movie.ids.trakt > series2.movie.ids.trakt ? 1 : 0,
            )
            .slice(0 + moviesCount, 6 + moviesCount)
            .map((movie) => (
              <p>{<MovieCard movie={movie} key={movie.movie.ids.imdb} />}</p>
            ))}
        </div>
      </div>

      <div className="border-2 rounded-xl p-5 backdrop-blur-sm border-gray-900 ">
        <div className="flex justify-between flex-wrap gap-5">
          <h1 className="text-3xl font-bold">Series</h1>
          <div className="inline-flex">
            <button
              onClick={() => setSeriesSort("recent")}
              disabled={seriesSort == "recent"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Recently Watched
            </button>
            <button
              onClick={() => setSeriesSort("release")}
              disabled={seriesSort == "release"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 "
            >
              Recently released
            </button>
            <button
              onClick={() => setSeriesSort("rating")}
              disabled={seriesSort == "rating"}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Rating
            </button>
          </div>
          <div className="inline-flex">
            <button
              onClick={() => setSeriesCount(seriesCount - 6)}
              disabled={seriesCount == 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Prev
            </button>
            <button
              onClick={() => setSeriesCount(seriesCount + 6)}
              disabled={seriesCount + 6 >= series.length}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {series
            .sort(
              seriesSort == "recent"
                ? (series1, series2) =>
                    new Date(series1.last_watched_at) <
                    new Date(series2.last_watched_at)
                      ? 1
                      : 0
                : seriesSort == "release"
                  ? (series1, series2) =>
                      new Date(series1.show.year) < new Date(series2.show.year)
                        ? 1
                        : 0
                  : (series1, series2) =>
                      series1.show.ids.trakt > series2.show.ids.trakt ? 1 : 0,
            )
            .slice(0 + seriesCount, 6 + seriesCount)
            .map((series) => (
              <p>{<SeriesCard series={series} key={series.show.ids.imdb} />}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
