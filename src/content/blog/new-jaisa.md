---
title: 'My Experience with New Jaisa, Refurbished hardware and Selfhosting'
description: 'This blog describes my experience with Self Hosting from Hardware Acquisition to Cloudflare Tunnelling'
pubDate: 'March 21 2026'
heroImage: '../../assets/Dell_OptiPlex_3020_002.jpg'
---


# Why to spend time and money?
The Most important question for this project or for matter any project is why? 
I have few points to justify my time, cost and effort dedications.
- Selfhosting will help me to study and know about networking and network management which is useful for network engineers.
- It can help me and my family to make a central repository to store Photos, Videos, Documents, Songs and much more.
- I can put a backups of important files to it.
- It will help me better understand NixOS as a server as I have used it as a client laptop OS.
- It will encourage my reading habit as I am planning to host Calibre.
- I can degoogle, de-spotify and remove all the unnecessary data breaches of my data from third parties.
- It will be a central truth server to store all my notes and Obsidian vault.
- I can check if *arr stack is better than stremio.
- I will be saving money as I am buying refurbished stuff.

I can't use my laptop for this because it is my main machine to study, work and play. Also I tried to do host it but running a GUI as well as services will drink the RAM like cola and the fans were buzzing like a drone which gets annoying after a while which can be saved by flow of air in a more open computer.
I got to sort my drives as my NixOS drive is running out of storage because It is split between NixOs and Windows at the same time. Also the HDD on laptop is under control of windows NTFS system so I can't be directly written to by NixOs. Got to sort this mess.

You can also use a mobile device to do this things but nix-on-droid does not support nix services yet and the battery will become prego aftercharging and discharging simultaneously. I have a mobile device but after 2010s no mobile allows to remove battery without destroying the back plate. so I can't use a phone for long term.

# What am I Getting?
I am getting a Refurbished Dell OptiPlex Desktop with Intel i3-2nd Gen and Win 10 Pro with 8GB RAM, 64GB SSD and 500GB HDD and A warranty of 1 Year [Store Link Not Sponsors](https://newjaisa.com/products/dell-optiplex-desktop-intel-i3-2nd-gen-win-10-pro-refurbished)

| Features | Name |
|----------+------|
| Price | 7000 + 165 (COD convenience) + taxes = 7164 |
| CPU | Intel i3 2nd Gen |
| Brand | Dell OptiPlex |
| RAM | 8GB |
| SSD | 64 GB |
| HDD | 500GB |
| Size | Tower? |

I know the hardware is not worth 7K but the big tech has decided that all the RAM, HDD and SSD whether tangible or planned to be made in the future belongs to them and manufacturers have complied with the demand. The Hardware will go for 3-4k at any normal situation. But What can we do in this situation.

Also my plan was to get a "Mini" PC but the all the mini pcs were either sold out or cost was just skyrocketing to justify the purchase so I had to go with a tower PC. Also any upgrade has would be difficult to do. My aim is not to get any sort of gaming done here but a light level of video transcoding for jellyfin and running all the other services.

I will add my review further of the Computer when It gets delivered and then I will decide if I was worth to get a order from NewJaisa, Please remind me that time. Also I need a kindle If any one gets a cheaper unit for sale around 3-4k please let me know about it.


# What will I do?
The main plan till now is to get the computer. Install Nixos (Will void the warranty, I have to get it confirmed). Get my server configuration file full setup and then enjoy the fruits of labour and money.

## What services will you run?
Most of these services are taken from Wolfgang's [video](https://youtu.be/f-x5cB6qCzA?si=WLzna7_KUzMhJ375) about selfhosting. So you can watch his video about it too.

### Calibre 
It is a service created by Kovid Goyal to manage and distribute your Ebook library to various devices.
It can arrange the ebooks, convert them to different formats, distribute them over the network, fetch news from different sources.

### Jellyfin
It a media library server to play your media like Series, Movies and others at a single place which can be shared over the network to view on tv, Android, IOS and web view.

### Strling PDF
It is a one stop shop to do anything with your pdf documents like cut, crop, reorder, compress and much more.
Just like "I Love PDF" but my own. God knows how many Aadhars, PAN and other sensitive documents do ilovepdf.com gets every single day.

### Vaultwarden
A Simple password manager to manage all the passwords, SSH keys, OTPs which you get on bitwarden.

### Immich
A Google photos alternative which can run Machine Learning Algorithms but locally. 

### Navidrome
To liberate yourself from spotify or youtube music on every platform that you wish to listen too.
No more spotify's or youtube's obnixous ads and bad recommendations.

### Copy Party File Mangement Software
CopyParty is the Goat at Client - Server File management with users, permission, passwords written in python on termux on android.
I am aiming to setup samba so that it can be a network storage for all devices.

### Paperless-ngx & quickscan
One place to hold all the documents which are to be scanned like notes, receipts, bills, notice and documents to view and download whenever and whereever you need.

### Next Cloud
It is a umberalla service to take over all the things that google can do. I want exploring it more if it can useful in my workflow.

### Miniflux
A RSS and website/youtube feed manager to store all the favourite blogs ands vids at one place.

### Microbin
A paste bin which is good.

### Syncthing or CouchDB
Syncthing server to manage important files, notes and folders between my laptop and phone devices.
I am also thinking about getting into couchDB to make my obsidian easy to write at laptop and portable with phone

### Selfhost Online Compiler
I didn't get a good online compiler which can be selfhosted to run the various small programs in any language. I am looking into this

### Home Page Manager
A single minimal beautiful home page to show all the important metrics and information and links at a single place.
So many services who will remember all the ports and addresses.

### Cloudflare Tunnel
I want to get a cloudflare tunnel setup that will tunnel me from any where in the world to my home network so It becomes trivial to use.
For this I need to get a cheap domain I am thinking to get one from porkbun and It is free so no tension to pay money.
But It is against TOS to stream jellyfin or piracy so better watchout.
Or else use a Tailscale server.

### Much much more
There are so many services on nix wiki that you can spend multiple years configuring your setup to be just what you want.

I plan to push the configuration to github so anyone can use it and collaborate on it.

# What have I tried till now?
Server Configuration till now that I used for my laptop-
``` nix
  services = {
    homepage-dashboard = {
      enable = true;
      openFirewall = true;
      allowedHosts = ",localhost:8082,127.0.0.1:8082";
      widgets = [
	  {
	    resources = {
	      cpu = true;
	      disk = "/";
	      memory = true;
	    };
	  }
	  {
	    search = {
	      provider = "duckduckgo";
	      target = "_blank";
	    };
	  }
     ];
    services = [
      {
        "Services Groups" = [ 
	  {
            "IP Address" = {
	      description = "";
	      href="";
            };
	  }
	  {
            "Home Page" = {
	      description = "This Homepage";
	      href="";
            };
	  }
	  {
            "Jellyfin" = {
	      description = "My Media Library";
	      href="";
            };
	  }
	  {
            "Navidrome" = {
	      description = "My Music Library";
	      href="";
            };
	  }
	  {
            "Stirling PDF" = {
	      description = "My PDF Convertor";
	      href="";
	    };
	  }
	  {
            "Paperless" = {
	      description = "My Document Library";
	      href="";
	    };
	  }
	  {
	    "Microbin" = {
	      description = "The Paste Bin";
	      href="";
            };
	  }
	  {
            "Vaultwarden" = {
	      description = "The Password Library";
	      href="";
            };
	  }
	  {
            "Printing" = {
	      description = "The Printer Library";
	      href="";
            };
	  }
	  {
            "Immich ML" = {
	      description = "The Image Mahine Learning";
	      href="";
            };
	  }
        ];
      }
    ];
  };

    calibre-server = {
      enable = true;
    };

    jellyfin = {
      enable = true;
    };
    stirling-pdf = {
      enable = true;
      environment = {
      SERVER_PORT = "8085";
      };
    };
    vaultwarden = {
      enable = true;
      config = {
        ROCKET_ADDRESS = "0.0.0.0";
	ALLOW_INSECURE_HTTP = true;
      };
    };
    immich = {
      enable = true;
    };

    navidrome = {
      enable = true;
      settings = { 
        Address = "0.0.0.0";
	MusicFolder = "/mnt/mydrive/Music";
      };
    };

# Samba is not working on IPAD idk why 
# It is showing up but can't store files on it.
# Should I pin the version of samba?

    samba = {
  enable = true;
  openFirewall = true;

  settings = {
    global = {
      workgroup = "WORKGROUP";
      "server string" = "smbnix";
      "netbios name" = "smbnix";
      security = "user";
      "server min protocol" = "SMB2";
      "server max protocol" = "SMB3";
    };

    "Laptop" = {
      path = "";
      browseable = true;
      readOnly = false;
      writeable = true;
      guestOk = true;
      validUsers = [];
    };
  };};

    samba-wsdd = {
      enable = true;
      discovery = true;
    };
    paperless = {
      enable = true;
      address = "0.0.0.0";
    };
    microbin = {
      enable = true;
    };
    miniflux = {
      enable = true;
      adminCredentialsFile = true;
    };
```
