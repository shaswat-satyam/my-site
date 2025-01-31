export default function CurrentObession() {
  return (
    <div>
      <div className="backdrop-blur-sm p-5 rounded-xl flex flex-col gap-5 border-gray-900 border-2">
        <div className="flex flex-row gap-16">
          <h1 className="text-xl font-bold">Nix OS</h1>{" "}
          <img className="w-64" src="./src/assets/icons/NixOS.svg" />
        </div>
        <p>
          Last Month, My POP_OS! based machine died. Because Pop_OS! is a ubuntu
          based Linux Disto. And Ubuntu core heart is Python. And my dumbass
          tried to update python version as, There were multiple python versions
          on the machine making it almost impossible to work for Python coding
          work. Long Story short, it was time to hop!
        </p>

        <p>
          I was looking out for something
          <ol>
            <li>
              stable, so if I tinker it but some important work comes around I
              could go back, and get the work done. Also If I crash my computer
              I could recover from it without having to setup everything from
              beginning.
            </li>
            <li>
              New, I have been in this linux rabbit hole for quite long around 2
              years or so that's why I wanted something harder OS to work with
              like Arch, Void, Bedrock.
            </li>
            <li>
              Bleeding edge, I have been hearing that there are new packages and
              new updates being rolled out by their respective communtites.
            </li>
          </ol>
        </p>

        <p>
          So the best Distro that could statisy all of the conditions was NixOS.
          It is based on being modular and stable with newest stuff. It achieves
          that by using a file called configuration.nix and
          hardware-configuration.nix to create a system from scratch. I can also
          use this to replicate my machine. Also with Version control, this
          becomes like a Node project in which I can update the package file to
          change the various components available inside the system. I can
          revert back if the change is system breaking and make a new branch.
        </p>
        <p>
          Till Now I has working well with my demands and Nvidia properitary
          drivers :( Handling fair bit of gaming. But I would like it to try to
          manage sideloading games. Also got to learn more about flakes and
          home-manager to turn my home directory to a nix file.
        </p>
      </div>
    </div>
  );
}
