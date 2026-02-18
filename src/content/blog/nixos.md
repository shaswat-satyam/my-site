---
title: "Introduction to Nix"
description: "This is a random blog post to showcase strength and weakness of Nix"
pubDate: "16 Feb 2026"
heroImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.jKEX9BF-L7ouOM2E47m8tAHaDI%3Fpid%3DApi&f=1&ipt=a5feddcbedd2766334b426f643566037f1d67f331e37c644127f960b33934049&ipo=images"
---

# Nixos

Nix is a language which can be used to represent the state of any linux workstation. This is powerful because, we can use this to make the deployment of any software trivial by sending the blueprint to build the infrastructure where the code will executed.

# Nix

Nix can build any version of any software on any machine.
Nix is a DSL for creating packages for software deployments.
As It was introduced in a paper so It is a turing complete language for coding the package.

Use `nix repl` to try out a nix code snippet.

## Nix Language

### Varialbles

```nix
# Integer
5

# Float
2.5

# String
"This is a string"
'' This is a multiline
String''

# String templating
"This is a string with ${myVariable}!"

# List
["hi" world 42.0]

# Object or Attribute Set
{
  name = "shaswat";
  numOfEyes = 2;
}


```

### Functions

Every thing in Nix is an expression and will evaluate to a value

```nix
# Function in short hand
aParamater : aParameter + 1

myFunction 42
```

As Nix is a functional language, Any Function can take a single Paramter.
So to use multiple parameters we have to either use

- nested functions
  More useful as the functions with fewer parameters can be reused.

```nix
a: b: c: a + b + c

```

- an Attribute sets
  More Used as it is more readable
  Also the Nix compiler will check if all the attributes are defined on invocation.

```nix
/* f = */
{a, b, c}: a + b + c

f {a = 1; b = 2; c = 3;}
# => 43
```

#### Optional Arguments in Attribute Sets

Optional Arguments in Attribute Sets

```nix
/* f = */
{a, b, c ? 40}: a + b + c

f {a = 1; b = 2;}
# => 43

```

#### Variables Binding

In Nix Code we can assign values to a variable only once. So To limit the scope of variable we use let scopes.
In Short, there are no mutable variables in Nix.

```nix
let
  f = a: a + 2;
in
  f 40
```

As nix is lazily evaluated and the binding are immediately enforced,
we can bind a result of a expression inside another bind

```nix
let
  f = a: a + 2;
  result = f 40;
in
  result
```

Another example to obsfucate the usage.

```nix
let
  myAttrs = {a = 1; b = 2; c = 3;};
in
  myAttrs.a + myAttrs.b + myAttrs.c

# => 6
```

Nix has a with keyword which can be used to expose all the attributes of an attribute set inside a let in block. So we can avoid writing the name of the attribute set again and again.

```nix
let
  myAttrs = {a = 1; b = 2; c = 3;};
in
  with myAttrs;
    a + b + c

# => 6
```

We should not use the above 'with' keyword as all the attributes decome visible in the "in" block. To be more concise and explicit we can use

```nix
let
  myAttrs = {a = 1; b = 2; c = 3;};
  inherit(myAttrs) a b c;
in
    a + b + c

# => 6
```

This also allows LSPs and other tools to do better static analysis.

#### builtins functions

Nix comes will a minimal but powerful set of builtin functions which are defined in global variable called builtins.

```nix
# This function will return a list of all the attributes in an attribute set.
builtins.attrNames {a = 1; b = 2;}

# => ["a" "b"]


# This function gives all the attributes that a function accepts
# and tells us which of them have default values
let
  f = {a, b ? 40}: a + b
in
  builtins.functionArgs f

# => { a = false; b = true;}
```

#### Currying

Passing a function in another function

```nix
MultiplyTwo = a: a * 2;
AddOne = a: a + 1;
MultiplyTwoAddOne = a: MultiplyTwo(AddOne(a));
MultiplyTwoAddOne 5
```

### Files

Nix allows us to break the code into files

```nix
# a.nix
4

# b.nix
import ./a.nix # Imported using relative path

# => 4

```

### Paths

Paths in most languages are implemented with strings
But in Nixos They are first class citizens

Absolute path is the display value of the path

```nix
./some-file.txt
# => /Users/shaswat/bla/some-file.txt
```

When the paths are evaluated to strings the path evaluated to the nix-store path for the file.

```nix
builtins.toString ./some-file.txt
# => /nix/store/b49dir13slsa2wsqcjc4jmsp00ybq424-some-file.txt
```

First part /nix/store is the path to the nix store.
It can be anywhere but it is not recommended to move the nix store.

Second part b49dir13slsa2wsqcjc4jmsp00ybq424 is the hash depending on the content of the referenced file and the name of the file.

More reading at Nix Thesis -> chapter 5 "The extensional Model"

```nix
let
  myHelpers = import ./helpers.nix;
in
  myHelpers.bundle ./src/
```

Every file is copied to the nix store and made readonly and given a unique hashed file name.
It is an addressable immutable data store similar to git.

### Derivation

Derivations are a builtin function that executes a command and captures the produced output.

```nix
derivation {
 name = "my-program"; # Every item in nix store needs a name
 system = "aarch64-darwin"; # Tells which system to target
 builder = "/usr/bin/clang"; # Program to build the file
 src = ./main.c; # What file to target
 args = [];
}
```

This file will be hashed and copied to nix store
Nix really cares about the name, system, builder and args.
The values of any additional attributes like src will provided via environment variables.

As clang can't read the name of the file to compile from environment variables so we use bash scripting to do the compilation

```nix
derivation {
 name = "my-program"; # Every item in nix store needs a name
 system = "aarch64-darwin"; # Tells which system to target
 builder = "/bin/bash"; # Program to build the file
 src = ./main.c; # What file to target
 args = ["-c" # Option for Reading bash commands from strings ''
   /usr/bin/clang $src
   '' ]; # The $src will be replaced by the path to main.c file in the nix store
}
```

then `nix-instantiate my-derivation.nix` it doesn't executes the derivation but serializes the derivation in deterministic manner.
`/nix/store/mgan1f57b46nfwwffvr591qbbafn2i6i-my-program.drv`

On cat ting the file we will see unstructured form of the serialized derivation which is hard to read.
We can use
`nix derivation show /nix/store/mgan1f57b46nfwwffvr591qbbafn2i6i-my-program.drv` to pretty print the derivation as JSON.

To execute a derivation we call it realizing the derivation which can be done by
`nix-store --realize /nix/store/mgan1f57b46nfwwffvr591qbbafn2i6i-my-program.drv`
This will execute the derivation inside a temporary folder known as sandbox will all the environment variables set.
This helps prevent the builder from pulling system configuration files or system libraries which can make the derivation not reproduciable.

Any derivation is also provided an out folder where all the outputs should be placed.
If the path remains non existant then It's an error, so we must tell the compiler where to place the file.

We can use `nix-build ./my-derivation.nix` to both realise and serialize the derivation in one step.
This will create a symlink to the result inside the nix store.

As we have hardcoded the paths to bash and clang which will make the program non reproducable.
So then we can build derivations to both bash and clang to get a particular version.

```nix
derivation {
  name = "clang-16";
  system = "aarch64-darwin";
  src = builtins.fetchTarball { # Builtin function to fetch a tarball
    url = "https://github.com/.../clang-16.0.0.src.tar.gz";
    sha256 = "sha256: ..."; # Optional, If not given nix will download the file everytime to check if file has changed.
    # Helps in time wasting download and supply change attacks.
  };
  builder = "/bin/bash";
  args = [ "-c" ''
    /usr/bin/tar -xtf $src
    # ... building using system tools ...
  ''];
}
```

This Clang compiler is build using system tools which makes it not reproducible and thus nix labels anything build with system tools as "impure".
So any tools created using some other tools takes it as input to create further new tools which is called a [[Merkle tree]].
So this hash can hold information about the every dependency and every sub - dependency which can be used to check if an derivation is build before.
So even any simple change with these tools will cause difference in hash and make a specific different nixstore item for that specific variant.

Stage one Compiler is created using impure inputs
Stage two compiler is created using inputs created by stage one compiler which is now specified or pure .

This can be done for every software that we use and have a large repository of programs which can be run anytime.

As we are using a sandbox which is the most bare minimum ie nothing.
And everything needs to be passed explicitly. SO we can creaet a dependency tree
This creates a direct dependency tree
`nix-store --query --references /nix/store/si...4m-coreuitls.drv`

This creates a transitive dependecny tree
which contains all direct dependencies and sub-dependencies and sub-sub-dependencies and so on

`nix-store --query --requisties /nix/store/si...4m-coreuitls.drv`

#### Stdenv

A Collection of pure build Tools is knwon as a standard environment.

```nix

let
  pkgs = import (builtins.fetchTarball{
    url = "github.com/nixpkgs.24.05.tar.gz"; # Link to TarBall of Nixpkgs
    sha256 = "sha256: ...";
  }) {};
in
derivation {
 name = "my-program";
 system = "aarch64-darwin";
 builder = "${pkgs.bash}/bin/bash";
 src = ./main.c;
 args = ["-c"
   /${pkgs.clang}/bin/clang $src
   '' ];
}
```

This will code very messy, so we can use

```nix

let
  pkgs = import (builtins.fetchTarball{
    url = "github.com/nixpkgs.24.05.tar.gz"; # Link to TarBall of Nixpkgs
    sha256 = "sha256: ...";
  }) {};
in
pkgs.stdenv.mkDerivation {
 name = "my-program";
 system = "aarch64-darwin";
 builder = "${pkgs.bash}/bin/bash";
 src = ./main.c;
 args = ["-c"
   /${pkgs.clang}/bin/clang $src
   '' ];
}
```

Here we make a standard environment and we can call the mkDerivation which is a high level wrapper function over the derivation function.
It will populate the sandbox will lots of useful tools like clang, bash, cmake, tar, etc. So we can remove lots of attributes.

```nix

let
  pkgs = import (builtins.fetchTarball{
    url = "github.com/nixpkgs.24.05.tar.gz"; # Link to TarBall of Nixpkgs
    sha256 = "sha256: ...";
  }) {};
in
pkgs.stdenv.mkDerivation {
 name = "my-program";
 src = ./main.c;
 nativeBuildInputs = []; # It can contain the tools that are required to build the derivation.

 buildINputs = []; # Dependencies which are required at runtime.
 # Dynamc libraries or configuration files.

 dontUnpack = true; # As our program is not a tarball we dont' need to unpack it

 buildPhase = '' # this describes how the building is done.
   clang $src -o my-program
 '';
 installPhase = '' # This descibes the how we populate the output folder.
 # This needs to follow the Linux File Hierarchy Standard
 # bin for binaries lib for libraries and include for headers
   mkdir -p $out/bin
   cp my-program $out/bin
 '';
}
```

We can use this to bootstrap support to any language
But nix provides support for numerous languages and libarries

```nix
pkgs.rustPlatform.buildRustPackage rec {
 name = "my-rust-crate";
 src = ./.;
 cargoLock = {
   lockFile = "${src}/Cargo.lock";
 };
}
```

Similar helpers exist for NodeJs, Go

```nix
pkgs.buildNpmPackage {
 name = "my-project";
 src = ./.;
}

pkgs.buildGoPackage {
 name = "my-project";
 src = ./.;
}

pkgs.buildDartApplication {
 name = "my-project";
 src = ./.;
}

pkgs.buildDotnetPackage {
 name = "my-project";
 src = ./.;
}

pkgs.buildRubyGem {
 name = "my-project";
 src = ./.;
}
```

### Lib

This contains utilities
We have more options to download source code form internet.
Also Functions to work with nix values

`pkgs.lib.strings.hasPrefix`
`pkgs.lib.list.map`
`pkgs.lib.attrsets.recursiveUpdate`

All are documented in the manual
nixos.org/manual/nixpkgs
noogle.dev to search nixos function by name

For Security read, Model Nix Thesis: Chapter 6

## Python

Horrible package manager - pip
add python3 to the packages or shell
we need to expose the compiled files to python

### Shell

create shell.nix

```nix
{pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [
    pkgs.python3
  ];
  env.LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.stdenv.cc.cc.lib
    pkgs.libz
  ];

}
```

then use activate the shell with nix-shell
then source ./venv/bin/activate

### Flake way

```nix
{
  description = "flake";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };
  outputs = {self, nixpkgs, ... }: let
    pkgs = nixpkgs.legacyPackages."x86_64-linux";
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      packages = [
        pkgs.python3
      ];
      env.LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
        pkgs.stdenv.cc.cc.lib
        pkgs.libz
     ];
    };

};
  };
};
```

### Nix Way

Using python package to take scope of modules

```nix
{pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages(pypkgs:[
      pypkgs.numpy
      pypkgs.requests
      pypkgs.pandas
    ]))
  ];

}
```

How to manage python packages without actual packages is to build oneself

```bash
nix run github:nix-community/pip2nix -- generate requests
nix run github:nix-community/pip2nix -- ./requirements.nix
nix shell github:nix-community/pip2nix
pip2nix generate "requests=2.32" numpy
```

```shell.nix
{pkgs ? import <nixpkgs> {} }:
let
  packageOverrides = pkgs.callPackage ./python-packages.nix {};
  python = pkgs.python3.override {inherit packageOverrides};
in
pkgs.mkShell {
  packages = [
    (python.withPackages(p:[
        p.seaborn
    ]))
  ];

}
```

## Flakes

[Flake configuration](https://snowfall.org)

Experimental features on nixos
Pin packages versions

## Home - Manager

to declare files inside the home directory To make it useful for other
distros [Finding Options and
functions](https://mipmip.github.io/home-manager-option-search/)
[Options for nixos and homemanager](https://github.com/lecoqjacob/manix)

## Packages

[Finding Options and Functions](https://search.nixos.org)

```bash
nix search nixpkgs <searchterm>
nix repl
sudo nix-rebuild build-vm .#<hostname>
```

## Direnv

Load custom envirionment for projects searchs for .envrc and .env
Insertes the environment as directed by .envrc Fast Language agnostic
DIRENV~LOGFORMAT~ = \"\" //fast direnv allow Nixos-env allows for
working with nks pgs Help avoid garbage collection Caches the
environment use nix in .envrc

```bash
use nix myenv.nix
```

For flakes use flake Editors can import the environment

# Further Learning

## Foundations: how Nix actually works

[https://nixos.org/guides/nix-pills/](https://nixos.org/guides/nix-pills/)

## Nix language itself

### **Nix Language Reference**

[https://nixos.org/manual/nix/stable/language/](https://nixos.org/manual/nix/stable/language/)

### **Nixpkgs manual – “Language” + “Functions”**

[https://nixos.org/manual/nixpkgs/stable/](https://nixos.org/manual/nixpkgs/stable/)

## Packaging software (you’re already here)

## NixOS (the module system)

### **NixOS Manual**

[https://nixos.org/manual/nixos/stable/](https://nixos.org/manual/nixos/stable/)

### **NixOS Module System (deep dive)**

[https://nixos.org/manual/nixos/stable/index.html#sec-writing-modules](https://nixos.org/manual/nixos/stable/index.html#sec-writing-modules)

## Flakes

### **Official Flakes documentation**

[https://nixos.wiki/wiki/Flakes](https://nixos.wiki/wiki/Flakes)

### Flake schema

[https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html)

## Home-Manager

### **Home-Manager Manual**

[https://nix-community.github.io/home-manager/](https://nix-community.github.io/home-manager/)

## Learn by reading real configs

- [https://github.com/Misterio77/nix-config](https://github.com/Misterio77/nix-config)
- [https://github.com/hlissner/dotfiles](https://github.com/hlissner/dotfiles)
- [https://github.com/rycee/configuration.nix](https://github.com/rycee/configuration.nix)
- [https://github.com/gvolpe/nix-config](https://github.com/gvolpe/nix-config)

## Advanced topics

- [https://nixos.wiki/wiki/Overlays](https://nixos.wiki/wiki/Overlays)
- [https://nixos.org/manual/nixpkgs/stable/#chap-overlays](https://nixos.org/manual/nixpkgs/stable/#chap-overlays)

## Communities that actually help

- **Matrix**: `#nixos:matrix.org`
- **Discourse**: [https://discourse.nixos.org](https://discourse.nixos.org)
- **Reddit**: r/NixOS (mixed quality)
- **GitHub issues** (best for real answers)
- Go throught youtubes
  - nix-hero
  - vimjoyer

## Nix Developer Environment

### Nix Shell

```nix
# shell.nix
{pkgs ? import <nixpkgs> { }}:
pkgs.mkShell
{
  # ...
}
```

We can launch the shell by using `nix-shell` command
It can also be added to a flake by using

```nix
devShells.x86_64-linux.default  = (import ./shell.nix {inherit pkgs; });
```

Inside the let in block

To enter the dev env from a flake we use the command `nix develop`.

```nix
# shell.nix
{ pkgs ? import <nixpkgs> { }}:
 pkgs.mkShell
 {
   nativeBuildInputs = [
     # packages
     # pkgs.nodejs
   ];
 }
```

```nix
# shell.nix
{ pkgs ? import <nixpkgs> { }}:
 pkgs.mkShell
 {
   nativeBuildInputs = with pkgs; [
     nodejs
   ];
 }
```

To change the shell we can use, to specify the first command that will be executed when we enter the environment.
use `nix-shell --command zsh` for non flake setup
use `nix develop --command zsh` for flake setup

We can use shellHook to run some larger commands

```nix
# shell.nix
{ pkgs ? import <nixpkgs> { }}:
 pkgs.mkShell
 {
   nativeBuildInputs = with pkgs; [
     nodejs
   ];
   shellHook = ''
     echo "welcome"
     source ./something.sh
     echo "to my shell!" | ${pkgs.lolcat}/bin/lolcat

   '';
 }
```

To declare environment variables we can use

```nix
# shell.nix
{ pkgs ? import <nixpkgs> { }}:
 pkgs.mkShell
 {
   nativeBuildInputs = with pkgs; [
     nodejs
   ];
   shellHook = ''
     echo "welcome"
     source ./something.sh
     echo "to my shell!" | ${pkgs.lolcat}/bin/lolcat

   '';
   COLOR = "blue"; # Can be defined anywhere to get the variable COLOR
   PASSWORD = import ./password.nix; # Can be used to import sensitive informations like password to be placed in gitignore

}
```

Use Nixhub.io to find the right nix package for application verisioning.

To get packages without the shell file
use `nix-shell -p python3` for non flake system or `nix shell nixpkgs#python3` for flake system

We can use nix shell to get packages from other nixpkgs versions or even github

```bash
nix shell nixpkgs#python3
nix shell nixpkgs/nixos-22.11#python3
nix shell github:vimjoyer/ansimage
```

## Python Dev Env

To Run the City Poster

```
nix shell nixpkgs#python3
nix shell nixpkgs#python3 nixpkgs#gcc

export LD_LIBRARY_PATH=/nix/store/cf1a53iqg6ncnygl698c4v0l8qam5a2q-gcc-14.3.0-lib/lib:$LD_LIBRARY_PATH

```
