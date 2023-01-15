# MASQ web3 Library Public Repository

## Vision
MASQ stands to be the only truly decentralized-stack web3 privacy browser, powered by a community of supporters. To provide a fully fledged user experience to both web2 users transitioning into web3, and those native to web3, the MASQ contributors must foster and embrace an ecosystem of web3 builders, projects and partners. **Our vision at MASQ is to onboard and grow a rich ecosystem of the most innovative, user friendly and fundamental web3 partners and dApps to offer one-click discover and experience to the MASQ users of the world**

## Purpose
Bundled into the MASQ web3 browser, there is a dedicated **web3 Store**
![image](https://user-images.githubusercontent.com/55721017/212500843-c5c82283-7a20-4a2f-8aad-0c0a2652f232.png)

This is a Library containing many popular web3-founded and blockchain based platforms, dApps and websites. Also included are other popular websites that many users interact with on a daily basis, to make navigating and interacting with these seamless.

To keep this directory updated and dynamic, this repository will be maintained by the MASQ team and further curated jointly by the community and greater web3 ecosystem using several methods. _They will be outlined as they become part of the process._

### For web3 projects and platforms
You are encouraged to reach out to our [team at MASQ](mailto:info@masq.ai?subject=Would%love%to%be%added%to%the%web3%Store!) to be included in this highly visible directory, so thousands of users around the world have one-click access to your platform and technology.

### For Community recommendations
**Discord**

There is a dedicated #web3-dapps-request [Discord channel](https://discord.gg/4hCEs3hPhb) for dApp and project discussions

**Canny dApp Request**

On our MASQ team Canny page there is a [dApps board](https://masq-network.canny.io/dapps) where you can request your favourite dApps to be added and upvote them to encourage their addition.

**Make sure you tweet your recommendation and tag [@MASQ_ai](https://twitter.com/MASQ_ai) with hashtag #masqweb3store to get the team's attention faster!**

## Guidelines
The team at MASQ will be releasing guidelines shortly for projects and communities to engage in getting included in the directory, as well as criteria for applying and being approved.

### Categories
web3 dApps and platforms are added to the main Categories

![image](https://user-images.githubusercontent.com/55721017/191414436-22dba94c-7699-460c-8a20-88e7086e448f.png)


## Repository Conventions
Each addition will need to be added to the `dapps.js` JSON file in the correct format, under the correct category array.
Project logo must be in correct format (see below), and linked using the image asset added to the asset folder.

### dapps.js JSON format

```{
    "id": 1,
    "name": "Discover", //category name
    "icon": {
      "url": "./assets/images/discover.svg" // category icon
    },
    "d_apps": [
      {
        "id": 1, // index
        "name": "Zapper", // name
        "description": "Easily track and ...", // description
        "favorite": false, // favorite status. default is false
        "link": "https://zapper.fi/", // link
        "icon": {
          "url": "./assets/images/dapp_Zapper.png" // favicon
        },
        "coin": {
          "url": "./assets/images/ethereum-pure.svg", // default token image in the app.
          "label": "ETHEREUM" // default token name in the app
        }
      },
    ...
    ]
  },
  ```
  
  #### Required Values
  
  - "name": enclosed in "double quotes"
  - "description": short description in one-two sentences enclosed in "double quotes"
  - "link": url enclosed in "double quotes" - must be a direct link to your primary website domain, and must be https, enclosed in "double quotes"
  - "icon": token or project logo as a png file, prefixed with `dapp_` - must be 100x100 dimensions within a circle, with transparent background if coloured. If logo is black, must be on top of a white 100x100 circle.

Inspect the [`/images/dapps`](https://github.com/MASQ-Project/MASQ-dapp-store/tree/main/assets/images/dapps) folder for examples of correct format
  
