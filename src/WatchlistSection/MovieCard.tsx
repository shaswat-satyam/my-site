import { useQuery } from "@tanstack/react-query";
import { ComponentMovie } from "../../types";

export default function MovieCard(movie: ComponentMovie) {
  const APIKEY = "c12fea4a";
  const { isLoading, error, data } = useQuery({
    queryKey: ["MetaData", movie.movie.movie.ids.imdb],
    queryFn: () =>
      fetch(
        `https://omdbapi.com/?apikey=${APIKEY}&i=${movie.movie.movie.ids.imdb}`,
      ).then((res) => res.json()),
    staleTime: 60000,
    retry: 5,
    retryDelay: 1000,
  });

  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto">
      <div className="bg-slate-800 shadow-lg min-h-fit border-gray-100d w-fit border sm:rounded-3xl p-3 flex">
        {error ? <div>{error.toString()}</div> : <></>}
        <div className=" overflow-visible w-3/5">
          <img
            className="rounded-3xl shadow-lg"
            src={
              data?.Poster
                ? data.Poster
                : `https://img.omdbapi.com/?apikey=${APIKEY}&i=${movie.movie.movie.ids.imdb}`
            }
            alt={movie.movie.movie.ids.slug}
          />
        </div>
        <div className="flex flex-col w-1/2  ml-5 space-y-4">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h2 className="text-3xl font-bold text-white text-ellipsis overflow-hidden">
              {movie.movie.movie.title}
            </h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {isLoading ? "Fetching" : data.imdbRating}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Movie</div>
            <div className="text-lg text-gray-800">
              {movie.movie.movie.year}
            </div>
          </div>
          <p className=" text-gray-400 max-h-40 overflow-hidden text-ellipsis">
            {isLoading ? "No Plot" : data.Plot}
          </p>
          <div className="flex text-2xl font-bold text-a text-white">
            {isLoading ? "2-3 hours" : data.Runtime}
          </div>
        </div>
      </div>
    </div>
  );
}
