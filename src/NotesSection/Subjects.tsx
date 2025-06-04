import Card from "../components/Card";
import os from "../assets/subject/os.jpeg";
import dbms from "../assets/subject/dbms.jpg";
import algo from "../assets/subject/algo.gif";
import cd from "../assets/subject/cd.png";
import se from "../assets/subject/se.png";

export default function Subjects() {
  return (
    <div className="flex flex-col gap-5 backdrop-blur-sm p-3.5 border-gray-900 rounded-xl border-2">
      <div>
        <h1 className="text-4xl font-extrabold pb-2">Notes</h1>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Computer Science</h1>
        <div className="flex gap-5 py-5 scroll-smooth overflow-x-auto">
          <Card
            name={"Operating System"}
            path={os}
            url={"./src/NotesSection/CS/Operating.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="OS is the foundation for other application to run on"
          />
          <Card
            name={"Databases"}
            path={dbms}
            url={"./src/NotesSection/CS/DBMS.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Goated Subject"
          />
          <Card
            name={"Algorithm"}
            path={algo}
            url={"./src/NotesSection/CS/algo.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="DSA 💀"
          />
          <Card
            name={"Software Engineering"}
            path={se}
            url={"./src/NotesSection/CS/Software.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Mangement Stuff to increase costs and time"
          />
          <Card
            name={"Compiler"}
            path={cd}
            url={"./src/NotesSection/CS/compiler.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Subject which help us avoid programming in x86"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold ">Programming Languages</h1>
        <div className="flex gap-5 py-5 scroll-smooth overflow-x-auto">
          <Card
            name={"Java"}
            path={"./src/assets/lang/java.svg"}
            url={"./src/NotesSection/Lang/java.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Need a Coffee"
          />
          <Card
            name={"Bash"}
            path={"./src/assets/lang/bash.svg"}
            url={"./src/NotesSection/Lang/Bash.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="For those who consider GUI as bloat"
          />
          <Card
            name={"JavaScript"}
            path={"./src/assets/lang/js.svg"}
            url={"./src/NotesSection/Lang/javascript.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="JS is everywhere"
          />
          <Card
            name={"TypeScript"}
            path={"./src/assets/lang/typescript.svg"}
            url={"./src/NotesSection/Lang/Typescript.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="JavaScript with types"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Tools & Frameworks</h1>
        <div className="flex gap-5 py-5 scroll-smooth overflow-x-auto">
          <Card
            name={"GIT"}
            path={"./src/assets/tool/git.svg"}
            url={"./src/NotesSection/Tools/git.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="VCS"
          />
          <Card
            name={"Godot"}
            path={"./src/assets/tool/godot.svg"}
            url={"./src/NotesSection/Tools/Godot.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Everybody in their lifetime has thought about becoming a game developer"
          />
          <Card
            name={"Pandas"}
            path={"./src/assets/frame/pandas.svg"}
            url={"./src/NotesSection/Tools/Pandas.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Data Analysis is the future"
          />
          <Card
            name={"Linux"}
            path={"./src/assets/tool/linux.svg"}
            url={"./src/NotesSection/Tools/linux.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc={`${new Date().getFullYear()} is be the year of linux`}
          />
          <Card
            name={"Next"}
            path={"./src/assets/tool/next.jpg"}
            url={"./src/NotesSection/Tools/next.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="JS framework by Vercel"
          />
          <Card
            name={"React"}
            path={"./src/assets/tool/react.svg"}
            url={"./src/NotesSection/Tools/React.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="Meta JS Framework for Frontend"
          />
          <Card
            name={"React Native"}
            path={"./src/assets/tool/React_Native_Logo.png"}
            url={"./src/NotesSection/Tools/reactNative.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="React Native the react's answer to native apps"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Btech Supplement</h1>
        <div className="flex gap-5 py-5">
          <Card
            name={"Economics"}
            path={"./src/assets/subject/econ.jpg"}
            url={"./src/NotesSection/Supplement/Econ.html"}
            creator="Shaswat Satyam"
            date="5th Semester"
            desc="The study of money"
          />
        </div>
      </div>
    </div>
  );
}
