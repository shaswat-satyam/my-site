import Card from "../components/Card";

export default function Subjects() {
  return (
    <div className="flex flex-col gap-5 backdrop-blur-sm p-3.5 border-gray-900 rounded-xl border-2">
      <div>
        <h1 className="text-4xl font-extrabold pb-2">Notes</h1>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Computer Science</h1>
        <div className="flex gap-5 py-5">
          <Card
            name={"Operating System"}
            path={"src/assets/subject/os.jpeg"}
            url={"./src/NotesSection/CS/Operating.html"}
          />
          <Card
            name={"Databases"}
            path={"src/assets/subject/dbms.jpg"}
            url={"src/NotesSection/CS/DBMS.html"}
          />
          <Card
            name={"Algorithm"}
            path={"src/assets/subject/algo.gif"}
            url={"src/NotesSection/CS/algo.html"}
          />
          <Card
            name={"Software Engineering"}
            path={"src/assets/subject/se.png"}
            url={"src/NotesSection/CS/Software.html"}
          />
          <Card
            name={"Compiler"}
            path={"src/assets/subject/cd.png"}
            url={"src/NotesSection/CS/compiler.html"}
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Programming Languages</h1>
        <div className="flex gap-5 py-5">
          <Card
            name={"Java"}
            path={"src/assets/lang/java.svg"}
            url={"src/NotesSection/Lang/java.html"}
          />
          <Card
            name={"Bash"}
            path={"src/assets/lang/bash.svg"}
            url={"src/NotesSection/Lang/Bash.html"}
          />
          <Card
            name={"JavaScript"}
            path={"src/assets/lang/javascript.svg"}
            url={"src/NotesSection/Lang/javascript.html"}
          />
          <Card
            name={"TypeScript"}
            path={"src/assets/lang/typescript.svg"}
            url={"src/NotesSection/Lang/Typescript.html"}
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Tools & Frameworks</h1>
        <div className="flex gap-5 py-5">
          <Card
            name={"GIT"}
            path={"src/assets/tool/git.svg"}
            url={"src/NotesSection/Tools/git.html"}
          />
          <Card
            name={"Godot"}
            path={"src/assets/tool/godot.svg"}
            url={"src/NotesSection/Tools/Godot.html"}
          />
          <Card
            name={"Pandas"}
            path={"src/assets/frame/pandas.svg"}
            url={"src/NotesSection/Tools/Pandas.html"}
          />
          <Card
            name={"Linux"}
            path={"src/assets/tool/linux.svg"}
            url={"src/NotesSection/Tools/linux.html"}
          />
          <Card
            name={"Next"}
            path={"src/assets/tool/next.jpg"}
            url={"src/NotesSection/Tools/next.html"}
          />
          <Card
            name={"React"}
            path={"src/assets/tool/react.svg"}
            url={"src/NotesSection/Tools/React.html"}
          />
          <Card
            name={"React Native"}
            path={"src/assets/tool/React_Native_Logo.png"}
            url={"src/NotesSection/Tools/reactNative.html"}
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Btech Supplement</h1>
        <div className="flex gap-5 py-5">
          <Card
            name={"Economics"}
            path={"src/assets/subject/econ.jpg"}
            url={"src/NotesSection/Supplement/Econ.html"}
          />
        </div>
      </div>
    </div>
  );
}
