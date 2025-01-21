import movies from "./watched_movies.json";
import series from "./watched_shows.json";

import MovieCard from "./MovieCard";
import SeriesCard from "./SeriesCard";
import { useQuery } from "@tanstack/react-query";

export default function WatchList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["quote"],
    queryFn: () =>
      fetch("https://qapi.vercel.app/api/random").then((res) => res.json()),
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
              {isLoading ? "Provoking Thought" : data.quote}
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
        <h1 className="text-3xl font-bold">Movies</h1>
        <div className="flex gap-5 flex-wrap justify-center">
          {movies
            .sort((series1, series2) =>
              new Date(series1.last_watched_at) <
              new Date(series2.last_watched_at)
                ? 1
                : 0
            )
            .slice(0, 6)
            .map((movie) => (
              <p>{<MovieCard movie={movie} key={movie.movie.ids.imdb} />}</p>
            ))}
        </div>
      </div>

      <div className="border-2 rounded-xl p-5 backdrop-blur-sm border-gray-900 ">
        <h1 className="text-3xl font-bold">Series</h1>
        <div className="flex gap-5 flex-wrap justify-center">
          {series
            .sort((series1, series2) =>
              new Date(series1.last_watched_at) <
              new Date(series2.last_watched_at)
                ? 1
                : 0
            )
            .slice(0, 6)
            .map((series) => (
              <p>{<SeriesCard series={series} key={series.show.ids.imdb} />}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
