export default function Card({
  name,
  desc,
  path,
  creator,
  date,
  url,
}: {
  name: string;
  desc: string;
  path: string;
  creator: string;
  date: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank">
      <div
        className={
          "bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-lg w-full"
        }
      >
        <img
          src={path}
          alt={name + " logo"}
          className="w-fit h-fit object-cover"
        />
        <div className="p-6 bg-gray-900">
          <h2 className="text-2xl font-bold text-white  mb-2">{name}</h2>
          <p className="text-gray-400 leading-tight mb-4">{desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-100 font-semibold">{creator}</span>
            </div>
            <span className="text-gray-600">{date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
