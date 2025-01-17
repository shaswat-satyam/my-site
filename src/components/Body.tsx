import Card from "./Card";
export default function Body() {
  return (
    <div className="backdrop-blur-sm p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
      <div>
        <h1 className="font-bold text-3xl pb-5">Language</h1>
        <div
          className=" flex flex-wrap 
            p-5 rounded 
          gap-5 "
        >
          <Card
            name={"Python"}
            path={"src/assets/lang/python.svg"}
            url={"youtu.be"}
            background={"bg-gradient-to-r from-blue-400 to-yellow-400"}
          />
          <Card name={"Ruby"} path={"src/assets/lang/ruby.svg"} />
          <Card name={"Javascript"} path={"src/assets/lang/javascript.svg"} />
          <Card name={"sql"} path={"src/assets/lang/sql.svg"} />
          <Card name={"C"} path={""} />
          <Card name={"CPP"} path={"src/assets/lang/cpp.svg"} />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Tools</h1>
        <div className=" flex flex-wrap gap-5 rounded p-5">
          <Card
            name={"Vim"}
            desc={"A Great tool"}
            path={"src/assets/tool/vim.svg"}
          />
          <Card name={"Blender"} path={"src/assets/tool/blender.svg"} />
          <Card name={"docker"} path={"src/assets/tool/docker.svg"} />
          <Card name={"Git"} path={"src/assets/tool/git.svg"} />
          <Card name={"GNU/Linux"} path={"src/assets/tool/linux.svg"} />
          <Card name={"Godot"} path={"src/assets/tool/godot.svg"} />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Frameworks</h1>
        <div className="flex flex-wrap p-5 gap-5">
          <Card name={"Bootstrap"} path={"src/assets/frame/bootstrap.svg"} />
          <Card name={"Numpy"} path={"src/assets/frame/numpy.svg"} />
          <Card name={"Pandas"} path={"src/assets/frame/pandas.svg"} />
          <Card name={"Rails"} path={"src/assets/frame/rails.svg"} />
          <Card name={"React"} path={"src/assets/frame/react.svg"} />
        </div>
      </div>
    </div>
  );
}
