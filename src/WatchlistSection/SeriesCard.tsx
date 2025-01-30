import { useQuery } from "@tanstack/react-query";
import { ComponentShow } from "../../types";

export default function SeriesCard(series: ComponentShow) {
  const APIKEY = "c12fea4a";
  const { isLoading, error, data } = useQuery({
    queryKey: ["MetaData", series.series.show.ids.imdb],
    queryFn: () =>
      fetch(
        `https://omdbapi.com/?apikey=${APIKEY}&i=${series.series.show.ids.imdb}`
      ).then((res) => res.json()),
    staleTime: 60000,
    retry: 5,
    retryDelay: 1000,
  });

  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto">
      <div className="bg-slate-800 shadow-lg min-h-fit border-gray-100d w-fit border sm:rounded-3xl p-3 flex">
        {error ? <div>{error.toString()}</div> : <></>}
        <div className=" overflow-visible w-fit">
          <img
            className="rounded-3xl shadow-lg"
            src={
              data?.Poster
                ? data.Poster
                : `https://img.omdbapi.com/?apikey=${APIKEY}&i=${series.series.show.ids.imdb}`
            }
            alt={series.series.show.ids.slug}
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4 ml-5">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-white">
              {series.series.show.title}
            </h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {isLoading ? "Fetching" : data.imdbRating}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Series</div>
            <div className="text-lg text-gray-800">
              {series.series.show.year}
            </div>
          </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden">
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
