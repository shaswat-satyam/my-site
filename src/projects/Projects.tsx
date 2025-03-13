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
              <h1 id="why" className="text-4xl py-5 font-bold">
                Why
              </h1>
              <h2 id="htmx" className="text-2xl p-5 font-bold">
                HTMX
              </h2>
              <p>
                To better understand we need a history lesson in how JavaScript
                was being used. In the ye olden times, we used to have no java
                script (Happy times). The whole internet was made of data in
                html and styled by CSS. But internet lacked the interactivity as
                we see now a days. Everything was set in stone, nothing was
                dynamic in nature. We had motions in banners and stuff using CSS
                (?). Then smart people at Netscape made JavaScript (in a
                weekend) to manipulate elements and introduce the dynamic nature
                like submitting a form and getting it&#39;s output into DOM
                elements. But working with JavaScript was awkward and was too
                much repetitive for programmers&#39; liking. So to combat this
                we introduced j query. But j query, syntax was not up to to mark
                again. I am looking you double $. We introduced React to not use
                raw java script to manipulate the DOM elements. With react or
                any other web library, We introduce some of our logic to the
                front end to be done at client side. Also the whole web page is
                stored in form of a java script code is not index-able via
                Crawlers of search engines causing lower SEO ranking.
                <br />
                So people invented server side rendering to convert this
                unindexable java script code into a webpage in server which is
                served specifically to crawlers. This approach if followed by
                Next.js instead of doing so much working for server side
                rendering and to remove all / most of the logic code from the
                front end and letting the back end manage all the logic,
                fetching response and other things of the application. But with
                htmx, we configure the server to send the html response straight
                to the browser which can be embedded into the document or
                replace a specific element.
              </p>
              <h2 id="docker" className="text-2xl p-5 font-bold">
                Docker
              </h2>
              <p>
                It eliminate the use of hosting service where we need to host
                the app via github and then cold start the app. I am also cold
                starting here, but it takes a lot of time via hosting as they
                under the hood use these cloud services like cloud, AWS and
                other stuff and add a markup to it (Cloud services under the
                hood use bare metal the cheapest way but the hardest to work
                with. ) Also It packs the whole app into a neat package which
                can be handled easily over the web. Then we can scale the app
                (why would thousands of people need to use a lame todo app) as
                per the need dynamically, which can not be done with bare metal
                servers.
              </p>
              <h1 id="htmx" className="text-2xl p-5 font-bold">
                HTMX
              </h1>
              <p>
                It is a js library to complement html and to extend it. It make
                use of REST full requests of Get, Post, Put, Patch and Delete to
                some paths to the server. This is done by hx-get, hx-post Server
                returns the html in form of format string to the browser which
                will be send to the required place. That place will be mentioned
                in hx-target which takes the query like querySelector to target
                a element or the first element which is valid. hx-swap is an
                attribute to position the response with respect to the target.
                To place it beforeend, afterstart and other positions hx-trigger
                can be used to set the trigger by which the response is sent to
                the server.
              </p>
              <h1 id="express" className="text-2xl p-5 font-bold">
                Express
              </h1>
              <p>
                I have used express which I am not very familiar with. I work
                with Ruby on Rails. HTMX can also work with Rails, Laravel,
                Django. Those uninitiated these are the web frameworks for Ruby,
                PHP, and python. Actually HTMX works better with these
                frameworks and allows to almost omit the use of js inside the
                app. Express is used to create a node server which can be runned
                using npm run We use functions to create the format strings of
                the requireed types like seperating a component or a partial. My
                future plans are to learn php, laravel and maybe django or flask
              </p>
              <h1 id="podman" className="text-2xl p-5 font-bold">
                Podman
              </h1>
              <p>
                It is an open source alternative for docker by red hat group (?)
                the people behind Fedora. As I have nixos on my machine I can
                easily use podman to start and enable containerization and
                virtualisation for the system. Nixos also allows the aliasing of
                the podman command to docker so i can use podman as docker only.
                Also have a docker hub account to push the images to a public
                repository which can then be hosted in many other places like
                digital Ocean, Google cloud Cloud run, AWS fargate.
              </p>
              <p>
                create a docker file to showcase how this image will be build
              </p>
              <pre className="p-5">
                <code className="lang-Dockerfile">
                  <span className="hljs-keyword">FROM</span> node:
                  <span className="hljs-number">12</span>-alpine
                  <br />
                  <span className="hljs-keyword">WORKDIR</span>
                  <span className="bash"> /app</span>
                  <br />
                  <span className="hljs-keyword">COPY</span>
                  <span className="bash"> package.json /app</span>
                  <br />
                  <span className="hljs-keyword">RUN</span>
                  <span className="bash"> npm install</span>
                  <br />
                  <span className="hljs-keyword">COPY</span>
                  <span className="bash"> . /app</span>
                  <br />
                  <span className="hljs-keyword">EXPOSE</span>
                  <span className="hljs-number">8099</span>
                  <br />
                  <span className="hljs-keyword">CMD</span>
                  <span className="bash">
                    [<span className="hljs-string">"node"</span>,
                    <span className="hljs-string">"app.js"</span>]
                  </span>
                </code>
              </pre>
              <p>
                Here we are taking a alpine linux image with node 12 installed
                on it. Set our working directory to app. Move package.json which
                has all the dependencies and place them on app then we run npm
                install to install all the node modules (Might be bad, install
                all the node modules including developers ?) Then we copy all
                the files in the current directory to the app directory
                (Don&#39;t all it a folder Everyone would be think you as
                windows noobs) Then we expose a port of 8099 to be accessible
                for port switching. Cloud Registry needs a port so it can be
                port forward to the server&#39;s port 8080. then we run a cmd
                node app.js to run our server.
              </p>
              <p>
                This is a overview for the docker image then build this image
                with some name:tag Docker image can be pushed to docker hub or
                the respective cloud registry
              </p>
              <h1 id="google-cloud" className="text-2xl p-5 font-bold">
                Google Cloud
              </h1>
              <p>
                (.. Google is evil ..) My first reason to use google cloud is
                the cost factor, well this the only reason But digressing,
                Google is also a widespread and can provide reliability and
                speed. (A Student only has a money factor tho) Google&#39;s
                service to run a container and let it be accessible to internet
                is Google Cloud Run. To register for it you need to activate the
                UPI&#39;s auto pay 15000 but will not be detected until you
                activate the premium services. (I hope because I ain&#39;t got
                that dough dog )
              </p>
              <p>
                Now to get this image which can be run over cloud, we actually
                need the image. To get this image we need to upload it to the
                artifact registry which is google&#39;s image respository. Now,
                I got a lot of problem to upload my image from local machine
                using gcloud to artifact registry. Maybe because I had improper
                setup the gcloud auth. idk wasted 4-5 hours. My workaround is to
                use the google shell for the project to pull the image from
                docker hub and then use upload this image to artifact registry
                from the shell itself. From then Just had to set my container
                local port then It was done
              </p>
              <h1 id="conclusion" className="text-2xl p-5 font-bold">
                Conclusion
              </h1>
              <p>
                Use HTMX or don&#39;t. Use Docker or don&#39;t. Life is too
                short to argue, say okay and move on. But I know I would be
                trying to implement them in my daily developer life time. Feel
                free to email or use the form or create an issue on the github
                repo to direct your strong feeling towards what slop I wrote on
                a night at 1 AM. Ok Going back to leetcode grind or Data Science
                course or College work.
              </p>
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
            Read More <br />
            <p className="text-sm">Warning Serial Yapper ahead</p>
          </button>
        )}
      </div>

      <div>
        <div className="backdrop-blur-sm p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
          <div className="flex flex-row gap-16">
            <h1 className="text-xl font-bold">Nix OS</h1>{" "}
            <img className="w-64" src="./src/assets/icons/NixOS.svg" />
          </div>
          <p>
            Last Month, My POP_OS! based machine died. Because Pop_OS! is a
            ubuntu based Linux Disto. And Ubuntu core heart is Python. And my
            dumbass tried to update python version as, There were multiple
            python versions on the machine making it almost impossible to work
            for Python coding work. Long Story short, it was time to hop!
          </p>

          <p>
            I was looking out for something
            <ol>
              <li>
                stable, so if I tinker it but some important work comes around I
                could go back, and get the work done. Also If I crash my
                computer I could recover from it without having to setup
                everything from beginning.
              </li>
              <li>
                New, I have been in this linux rabbit hole for quite long around
                2 years or so that's why I wanted something harder OS to work
                with like Arch, Void, Bedrock.
              </li>
              <li>
                Bleeding edge, I have been hearing that there are new packages
                and new updates being rolled out by their respective
                communtites.
              </li>
            </ol>
          </p>

          <p>
            So the best Distro that could statisy all of the conditions was
            NixOS. It is based on being modular and stable with newest stuff. It
            achieves that by using a file called configuration.nix and
            hardware-configuration.nix to create a system from scratch. I can
            also use this to replicate my machine. Also with Version control,
            this becomes like a Node project in which I can update the package
            file to change the various components available inside the system. I
            can revert back if the change is system breaking and make a new
            branch.
          </p>
          <p>
            Till Now I has working well with my demands and Nvidia properitary
            drivers :( Handling fair bit of gaming. But I would like it to try
            to manage sideloading games. Also got to learn more about flakes and
            home-manager to turn my home directory to a nix file.
          </p>
        </div>
      </div>
    </div>
  );
}
