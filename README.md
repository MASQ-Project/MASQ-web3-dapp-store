# MASQ web3 Apps Directory Repository

## Purpose
Bundled into the MASQ dMeshVPN web3 browser, there is a directory containing many popular web3, crypto and blockchain based platforms, dApps and websites. Also included are other popular websites that many users interact with on a daily basis.
To keep this directory updated and dynamic, this repository will be maintained by the MASQ team and curated jointly by the community and greater web3 ecosystem.

Projects and web3 platform are encouraged to reach out to our team at MASQ to be included in this highly visible directory, so thousands of users around the world have one-click access to your platform and tecnology

## Guidelines
The team at MASQ will be releasing guidelines shortly for projects and communities to engage in getting included in the directory, as well as criteria for applying and being approved.

### Categories
To Be Added


## Goals for the web3 Apps Directory
To Be Added

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
  - "icon": token or project logo as a png file - size details and guidelines for the image will be added soon
  
