import Card from "./Card";
export default function Body() {
  return (
    <>
      <div className="backdrop-blur-sm sm:p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
        <div>
          <h1 className="font-bold text-3xl max-sm:pl-3 max-sm:pt-2 pb-5">
            Language
          </h1>
          <div
            className=" flex flex-wrap 
            p-5 rounded 
          gap-5 max-sm:justify-around"
          >
            <Card
              name={"Python"}
              path={"./src/assets/lang/python.svg"}
              url={"https://www.python.org"}
              desc="Easy to use Programming language"
              creator="Guido Van Rossum"
              date={"January 1994"}
              rating={4}
            />
            <Card
              name={"Ruby"}
              path={"./src/assets/lang/ruby.svg"}
              url="https://www.ruby-lang.org"
              desc="Python Like Functional Language. Easy to use for beginners. Revels in its simplicity and its Japanese"
              creator="Yukihiro `Matz` Matsumoto"
              date="1995"
              rating={3}
            />
            <Card
              name={"Javascript"}
              path={"./src/assets/lang/js.svg"}
              url="https://www.openjsf.org"
              desc="Most Popular that should not have existed. This language was made in a week. But couldn't be fixed for decades"
              creator="Brendan Eich"
              date="May 1995"
              rating={4}
            />
            <Card
              name={"SQL"}
              path={"./src/assets/lang/sql.svg"}
              url="https://www.sql.org"
              desc="Goated Lang to query data from DBMS."
              date="1979"
              creator="Donald Chamberlin and Raymond Boyce"
              rating={4}
            />
            <Card
              name={"C"}
              path={"./src/assets/lang/c.svg"}
              url="https://www.iso.org/standard/82075.html"
              desc="Language to rule them all. But be wise of the space allocation"
              creator="Dennis Ritchie"
              date="1972"
              rating={3}
            />
            <Card
              name={"CPP"}
              path={"./src/assets/lang/cpp.svg"}
              url="https://isocpp.org/"
              desc="Superset of C or C + Object Oriented Programming"
              creator="Bjarne Stroustrup"
              date="1985"
              rating={3}
            />
          </div>
        </div>
      </div>

      <div className="backdrop-blur-sm sm:p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
        <h1 className="font-bold max-sm:pl-5 max-sm:pt-5 text-3xl">Tools</h1>
        <div className=" flex flex-wrap gap-5 rounded p-5 max-sm:justify-around">
          <Card
            name={"Vim"}
            desc={"A Great tool for text editing"}
            creator="Bram Moolenaar"
            date="2 November 1991"
            url="https://www.vim.org/"
            path={"./src/assets/tool/vim.svg"}
            rating={4}
          />
          <Card
            name={"Blender"}
            path={"./src/assets/tool/blender.svg"}
            desc="Powerful Tool for everyone's 2D/3D animating or Modelling Needs. "
            date="2 January 1994"
            creator="Ton Roosendaal"
            url="https://www.blender.org/"
            rating={2}
          />
          <Card
            name={"Docker"}
            path={"./src/assets/tool/docker.svg"}
            desc="Tool for creating Containers to run software seperate from the OS"
            creator="Solomon Hykes"
            url="https://www.docker.com/"
            date="20 March 2013"
            rating={3}
          />
          <Card
            name={"Git"}
            path={"./src/assets/tool/git.svg"}
            creator="Linus Torvalds"
            url="https://git-scm.com/"
            date="7 April 2005"
            desc="Arguably the best Version Control Management Software"
            rating={4}
          />
          <Card
            name={"GNU/Linux"}
            path={"./src/assets/tool/linux.svg"}
            creator="Linus Torvalds"
            url="https://kernel.org/"
            desc="Best OS hands down"
            date="17 September 1991"
            rating={4}
          />
          <Card
            name={"Godot"}
            path={"./src/assets/tool/godot.svg"}
            url="https://godotengine.org/"
            creator="Juan Linietsky and Ariel Manzur"
            desc="Game Engine with GDscript (Python like Language) "
            date="14 January 2014"
            rating={3}
          />
        </div>
      </div>

      <div className="backdrop-blur-sm sm:p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
        <h1 className="font-bold text-3xl pb-5 max-sm:pt-3 pl-3">Frameworks</h1>
        <div className="flex flex-wrap p-5 gap-5 justify-around">
          <Card
            name={"Bootstrap"}
            url="https://getbootstrap.com/"
            date="19 August 2011"
            creator="Mark Otto, Jacob Thornton"
            desc="Opiniated CSS framework but worse than Tailwindcss"
            path={"./src/assets/frame/bootstrap.svg"}
            rating={5}
          />

          <Card
            name={"Numpy"}
            creator="Travis Oliphant"
            date="2006"
            desc="Library to do numerical calcuations in python"
            path={"./src/assets/frame/numpy.svg"}
            url="https://numpy.org/"
            rating={4}
          />
          <Card
            name={"Pandas"}
            path={"./src/assets/frame/pandas.svg"}
            creator="Wes Mickinney"
            desc="Libary to handle data in python"
            url="https://pandas.pydata.org/"
            date="11 January 2008"
            rating={4}
          />
          <Card
            name={"Ruby On Rails"}
            creator="David Heinemeier Hansson"
            path={"./src/assets/frame/rails.svg"}
            url="https://rubyonrails.org/"
            date="July 2004"
            desc="Web Framework for Rails. Used to be the goat in the back but now it is dormant"
            rating={4}
          />
          <Card
            name={"React"}
            path={"./src/assets/frame/react.svg"}
            desc="Frontend Framework for JS by Meta"
            creator="Jordan Walkle"
            date="29 May 2013"
            url="https://react.dev/"
            rating={4}
          />
        </div>
      </div>
    </>
  );
}
