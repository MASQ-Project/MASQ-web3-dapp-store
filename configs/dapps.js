// from MASQ-web3-store Public repo - modified 29 Feb 2024
// to be imported to path: app/renderer/configs/dapps.js
// version 3.0

import dapps from "../assets/images/dapps";
export const categoriesData = [
  {
    id: 1,
    name: 'Discover',
    icon: {
      url: dapps.discover,
    },
    d_apps: [
       {
        id: 1,
        name: 'MASQ-GPT',
        description:
          'Ask MASQ questions naturally to an AI-Powered assistant, directly from the MASQ Knowledge Base.',
        favorite: false,
        link: 'https://docs.masq.ai/masq/getting-started/what-is-MASQ?q=',
        icon: {
          url: dapps.masq_icon,
        },
      },
      {
        id: 2,
        name: 'QuickSwap',
        description:
            'Quickswap is a decentralized exchange (DEX) on the Polygon Network. Trade MASQ here on Polygon!',
        favorite: false,
        link: 'https://quickswap.exchange/',
        icon: {
            url: dapps.quickSwap,
        },
      },
      {
        id: 3,
        name: 'Presearch',
        description: 'Search privately with the Presearch decentralized search engine, powered by blockchain technology.',
        favorite: false,
        link: 'https://presearch.com',
        icon: {
          url: dapps.presearch,
        },
      },
      {
        id: 4,
        name: 'Frame',
        description: 'A privacy focused Ethereum wallet that runs natively on macOS, Windows and Linux',
        favorite: false,
        link: 'https://frame.sh/',
        icon: {
          url: dapps.frameWallet,
        },
      },
      {
        id: 5,
        name: 'Filebase',
        description:
          'Experience decentralized storage access to IPFS, with an easy to use interface',
        favorite: false,
        link: 'https://filebase.com/',
        icon: {
          url: dapps.filebase,
        },
      },
      {
        id: 6,
        name: 'dm3 Protocol',
        description:
          'The dm3 protocol offers peer messaging with end-to-end encryption, across ENS for easy adoption.',
        favorite: false,
        link: 'https://dm3.network/',
        icon: {
          url: dapps.dm3,
        },
      },
      {
        id: 7,
        name: 'Opensea',
        description:
          'A peer-to-peer marketplace for NFTs, rare digital items and crypto collectibles.',
        favorite: false,
        link: 'https://opensea.io/',
        icon: {
          url: dapps.opensea,
        },
        coin: {
          url: './assets/images/neo.svg',
          label: 'NEO',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'DeFi',
    icon: {
      url: dapps.defi,
    },
    d_apps: [
      {
        id: 1,
        name: 'Aave',
        description:
          'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits and borrow assets.',
        favorite: false,
        link: 'https://app.aave.com/',
        icon: {
          url: dapps.aave,
        },
      },
      {
        id: 2,
        name: 'Bancor',
        description:
          'Trade tokens and earn interest on your favorite tokens by staking them.',
        favorite: false,
        link: 'https://bancor.network/',
        icon: {
          url: dapps.bancor,
        },
      },
      {
        id: 3,
        name: 'PoolTogether',
        description:
          'Crypto-powered savings protocol based on Premium Bonds. Save money and have a chance to win every week.',
        favorite: false,
        link: 'https://pooltogether.com/',
        icon: {
          url: dapps.poolTogether,
        },
      },
      {
        id: 4,
        name: 'Zapper',
        description:
          'Easily track and visualize all your DeFi assets and liabilities in one simple interface.',
        favorite: false,
        link: 'https://zapper.fi/',
        icon: {
          url: dapps.zapper,
        },
      },
      {
        id: 5,
        name: 'Crucible',
        description:
          'A Crucible is an ERC-721 NFT that acts as a non-custodial universal wallet for DeFi',
        favorite: false,
        link: 'https://crucible.alchemist.wtf/',
        icon: {
          url: dapps.crucible,
        },
      },
      {
        id: 6,
        name: 'DefiLlama',
        description:
          'DefiLlama is a transparent DeFi TVL and analytics platform.',
        favorite: false,
        link: 'https://defillama.com/',
        icon: {
          url: dapps.defillama,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Art & Collectables',
    icon: {
      url: dapps.artsCollectibles,
    },
    d_apps: [
      {
        id: 1,
        name: 'Opensea',
        description:
          'A peer-to-peer marketplace for NFTs, rare digital items and crypto collectibles.',
        favorite: false,
        link: 'https://opensea.io/',
        icon: {
          url: dapps.opensea,
        },
      },
      {
        id: 2,
        name: 'Fluf World',
        description:
          'Fluf World is metaverse ecosystem of NFT character collectables and a global, creative community.',
        favorite: false,
        link: 'https://under.fluf.world',
        icon: {
          url: dapps.flufWorld,
        },
      },
      {
        id: 3,
        name: 'Rarible',
        description:
          'Discover, sell and buy NFTs on Rarible! Whether it is Ethereum NFTs, Solana NFTs or Tezos NFTs, get them on first Web3 multichain marketplace.',
        favorite: false,
        link: 'https://rarible.com',
        icon: {
          url: dapps.rarible,
        },
      },
      {
        id: 4,
        name: 'Foundation',
        description:
          'Using the idea of the stock market & crypto to benefit creators and collectors directly.',
        favorite: false,
        link: 'https://foundation.app/',
        icon: {
          url: dapps.foundation,
        },
      }, 
    ],
  },
  {
    id: 4,
    name: 'Games',
    icon: {
      url: dapps.games,
    },
    d_apps: [
      {
        id: 1,
        name: 'Decentraland',
        description:
          'Determine the future of a virtual world, in the first fully decentralized digi-verse, Decentraland',
        favorite: false,
        link: 'https://decentraland.org',
        icon: {
          url: dapps.decentraland,
        },
      },
      {
        id: 2,
        name: 'AIFA',
        description:
          'Create your own AIFA All-Stars, powered by ASM Brains. Play for rankings, Play-and-Earn, or just for fun.',
        favorite: false,
        link: 'https://aifa.football',
        icon: {
          url: dapps.aifa,
        },
      },
      {
        id: 3,
        name: 'Arc8',
        description:
          'Arc8 by GAMEE brings the blockchain experience to millions of gamers - Powered by Polygon',
        favorite: false,
        link: 'https://arc8.gamee.com',
        icon: {
          url: dapps.arc8,
        },
      },
      {
        id: 4,
        name: 'CryptoVoxels',
        description:
          'Cryptovoxels is a virtual world and metaverse, powered by the Ethereum blockchain.',
        favorite: false,
        link: 'https://www.cryptovoxels.com/',
        icon: {
          url: dapps.cryptoVoxels,
        },
      },
      {
        id: 5,
        name: 'DarkForest',
        description:
          "Dark Forest, the world's first decentralized real-time strategy game. Built on Ethereum.",
        favorite: false,
        link: 'https://zkga.me/',
        icon: {
          url: dapps.darkForest,
        },
      },
      {
        id: 6,
        name: 'BetSwirl',
        description:
          "Transforming the future of GambleFi with Web3 │ Bringing excitement and transparency to Gambling",
        favorite: false,
        link: 'https://betswirl.eth.limo',
        icon: {
          url: dapps.betSwirl,
        },
      },
      {
        id: 7,
        name: 'Pegaxy',
        description:
          "Pegaxy (Pegasus Galaxy) is a racing game with futuristic mythological styling. Pega (the horses) are descendants of the mighty Pegasus.",
        favorite: false,
        link: 'https://pegaxy.io/',
        icon: {
          url: dapps.pegaxy,
        },
      },
      {
        id: 8,
        name: 'Dragonmaster',
        description:
          "Dragon Master is the first blockchain-based Metaverse game that blends RTS, MOBA, Collection, and Play-to-Earn gameplay.",
        favorite: false,
        link: 'https://dragonmaster.co/',
        icon: {
          url: dapps.dragonmaster,
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Exchanges',
    icon: {
      url: dapps.exchanges,
    },
    d_apps: [
      {
        id: 1,
        name: 'Uniswap',
        description:
          'Swap, earn, and build on the leading decentralized crypto trading protocol.',
        favorite: false,
        link: 'https://app.uniswap.org/#/swap?outputCurrency=0x06f3c323f0238c72bf35011071f2b5b7f43a054c&use=V2',
        icon: {
          url: dapps.uniswap,
        },
      },
      {
        id: 2,
        name: 'QuickSwap',
        description:
          'Quickswap is a decentralized exchange (DEX) on the Polygon Network. Trade MASQ here on Polygon!',
        favorite: false,
        link: 'https://quickswap.exchange/',
        icon: {
          url: dapps.quickSwap,
        },
      },
      {
        id: 3,
        name: 'Dextools',
        description:
          'DEXTools boosts your exchange experience! Real-time data analysis at the tips of your fingers.',
        favorite: false,
        link: 'https://www.dextools.io/app',
        icon: {
          url: dapps.dextools,
        },
      },
      {
        id: 4,
        name: 'Balancer',
        description:
          'Balancer Finance is an Ethereum-based automated market maker that enables customizable token pools and fee-free trading for liquidity providers.',
        favorite: false,
        link: 'https://balancer.fi/',
        icon: {
          url: dapps.balancer,
        },
      },
      {
        id: 5,
        name: 'Telcoin',
        description:
          'Telcoin App is a mobile access point to the entire suite of user-owned Telcoin products, including a fast and affordable fiat remittance portal and a digital wallet on the Polygon Network.',
        favorite: false,
        link: 'https://www.telx.network/?ref=masq',
        icon: {
          url: dapps.telcoin,
        },
      },
      {
        id: 6,
        name: 'Matcha',
        description:
          'Matcha finds you the best prices across exchanges and combines them into one gasless trade.',
        favorite: false,
        link: 'https://matcha.xyz/',
        icon: {
          url: dapps.matcha,
        },
      },
      {
      id: 7,
      name: 'Sushiswap',
      description:
        'Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform',
      favorite: false,
      link: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x06F3C323f0238c72BF35011071f2b5B7F43A054c',
      icon: {
        url: dapps.sushiSwap,
        },
      },
    ],
  },
  {
    id: 6,
    name: 'Social',
    icon: {
      url: dapps.social,
    },
    d_apps: [
      {
        id: 1,
        name: 'YouTube',
        description:
          'The place to watch videos from your favorite content creators all around the world.',
        favorite: false,
        link: 'https://youtube.com',
        icon: {
          url: dapps.youtube,
        },
      },
      {
        id: 2,
        name: 'Skiff (sunsetting)',
        description:
          'Skiff is sunsetting their platform aroiund July 2024.',
        favorite: false,
        link: 'https://skiff.com/',
        icon: {
          url: dapps.skiff,
        },
      },
      {
        id: 3,
        name: 'dm3 Protocol',
        description:
          'The dm3 protocol offers peer messaging with end-to-end encryption, across ENS for easy adoption.',
        favorite: false,
        link: 'https://dm3.network/',
        icon: {
          url: dapps.dm3,
        },
      },
    ],
  },
  {
    id: 7,
    name: 'Utilities',
    icon: {
      url: dapps.utilities,
    },
    d_apps: [
      {
        id: 1,
        name: 'Akash',
        description:
          'Akash Network provides a fast, efficient and low-cost application deployment solution.',
        favorite: false,
        link: 'https://akash.network/',
        icon: {
          url: dapps.Akash,
        },
      },
      {
        id: 2,
        name: 'Presearch',
        description: 'Search privately with the Presearch decentralized search engine, powered by blockchain technology.',
        favorite: false,
        link: 'https://presearch.com',
        icon: {
          url: dapps.presearch,
        },
      },
      {
        id: 3,
        name: 'Filebase',
        description:
          'Experience decentralized storage access to IPFS, with an easy to use interface',
        favorite: false,
        link: 'https://filebase.com/',
        icon: {
          url: dapps.filebase,
        },
      },
      {
        id: 4,
        name: 'ENS',
        description: 'Decentralised naming for wallets, websites, & more',
        favorite: false,
        link: 'https://ens.domains',
        icon: {
          url: dapps.ens,
        },
      },
      {
        id: 5,
        name: 'Ethplorer',
        description:
          'Search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities.',
        favorite: false,
        link: 'https://ethplorer.io/',
        icon: {
          url: dapps.ethExplorer,
        },
      },
      {
        id: 6,
        name: 'Polygon Portal',
        description: 'Manage, bridge, swap and receive crypto assets on Polygon network.',
        favorite: false,
        link: 'https://portal.polygon.technology/',
        icon: {
          url: dapps.polygonWallet,
        },
      },
      {
        id: 7,
        name: 'CoinGecko',
        description: 'View crypto charts live, market cap, and trading volume.',
        favorite: false,
        link: 'https://www.coingecko.com',
        icon: {
          url: dapps.coingecko,
        },
      },
      {
        id: 8,
        name: 'Frame',
        description: 'A privacy focused Ethereum wallet that runs natively on macOS, Windows and Linux',
        favorite: false,
        link: 'https://frame.sh/',
        icon: {
          url: dapps.frameWallet,
        },
      },
      {
        id: 9,
        name: 'Rabby',
        description: 'The game-changing wallet for Ethereum and all EVM chains.',
        favorite: false,
        link: 'https://rabby.io/',
        icon: {
          url: dapps.rabby,
        },
      },
    ],
  },
  {
    id: 8,
    name: 'Other',
    icon: {
      url: dapps.other,
    },
    d_apps: [
      {
        id: 1,
        name: 'Intro to web3',
        description: 'Read about the evolution of web3',
        favorite: false,
        link: 'https://ethereum.org/en/web3/',
        icon: {
          url: dapps.ethereum,
        },
      },
      {
        id: 2,
        name: 'alXandria',
        description: 'alXandria is an online, open-source, collaborative encyclopedic effort.',
        favorite: false,
        link: 'https://alxandria.org',
        icon: {
          url: dapps.alxandria,
        },
      },
    ],
  },
];
