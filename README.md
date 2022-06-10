# MASQ dApp Store Public Directory

## MASQ dApp Store Repository - will be made public once workflows are set up

### dapps.json format

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
  
  "name":
  "description":
  "link": 
  "icon":
