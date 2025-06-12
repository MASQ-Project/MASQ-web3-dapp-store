// from MASQ-web3-store Public repo - modified 5 Jan 2025
// to be imported to path: app/renderer/configs/dapps.js
// version 3.5

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
        name: 'MASQ AI',
        description:
          'Ask MASQ questions naturally to an AI-Powered assistant, directly from the MASQ Knowledge Base.',
        favorite: false,
        link: 'https://docs.masqbrowser.com/masq?q=what+is+MASQ?&ask=true',
        icon: {
          url: dapps.masq_icon,
        },
      },
      {
        id: 2,
        name: 'Timpi',
        description:
          'Timpi is the world\'s first un-manipulated search engine',
        favorite: false,
        link: 'https://timpi.io/',
        icon: {
        url: dapps.timpi,
        },
      },
      {
        id: 3,
        name: 'Superbridge',
        description:
        'Native bridging for rollups - bridge ETH, MASQ and other tokens easily',
        favorite: false,
        link: 'https://superbridge.app/',
        icon: {
        url: dapps.superbridge,
        },
      },
      {
        id: 4,
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
        id: 5,
        name: 'Venice',
        description:
          'Private and Uncensored AI',
        favorite: false,
        link: 'https://venice.ai/',
        icon: {
          url: dapps.veniceai,
        },
      },
      {
        id: 6,
        name: 'Presearch',
        description: 'Search privately with the Presearch decentralized search engine, powered by blockchain technology.',
        favorite: false,
        link: 'https://presearch.com',
        icon: {
          url: dapps.presearch,
        },
      },
      {
        id: 7,
        name: 'Handshake',
        description: 'Decentralised naming for wallets, websites, & more',
        favorite: false,
        link: 'https://handshake.org',
        icon: {
          url: dapps.handshake,
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
        name: 'HashAI',
        description:
          'Revolutionary Artificial Intelligence, Optimizing Crypto Mining',
        favorite: false,
        link: 'https://www.hashai.co.uk',
        icon: {
          url: dapps.hashai,
        },
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        name: 'Hamster Kombat',
        description:
          'Make your way from the shaved hamster to the grandmaster CEO of the tier-1 crypto exchange',
        favorite: false,
        link: 'https://hamsterkombatgame.io',
        icon: {
          url: dapps.hamster_kombat,
        },
      },
      {
        id: 2,
        name: 'Moon Tropica',
        description:
          'First ever community driven & crypto storlyine infused RPG',
        favorite: false,
        link: 'https://moontropica.com',
        icon: {
          url: dapps.moontropica,
        },
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        link: 'https://app.uniswap.org/swap',
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
        name: 'dDocs.new',
        description:
          'Ditch G**gle docs! Privacy-enhancing. Peer-to-peer. Self-sovereign. Powered by Fileverse.',
        favorite: false,
        link: 'https://docs.fileverse.io/document/create',
        icon: {
          url: dapps.dDocs,
        },
      },
      {
        id: 1,
        name: 'Send App',
        description:
          'Join the Send revolution and experience seamless sending..',
        favorite: false,
        link: 'https://send.app',
        icon: {
          url: dapps.send,
        },
      },
      {
        id: 2,
        name: 'Welcome Onchain',
        description:
          'Welcome Onchain is a permissionless platform that brings together the working heartbeat of the crypto community.',
        favorite: false,
        link: 'https://www.welcomeonchain.xyz',
        icon: {
          url: dapps.welcome_onchain,
        },
      },
      {
        id: 3,
        name: 'Fileverse',
        description:
          'Privacy-enhancing and onchain alternative to Google Workspace & Notion',
        favorite: false,
        link: 'https://fileverse.io/',
        icon: {
          url: dapps.fileverse,
        },
      },
      { id: 4,
        name: 'Timpi',
        description:
          'Timpi is the world\'s first un-manipulated search engine',
        favorite: false,
        link: 'https://timpi.io/',
        icon: {
          url: dapps.timpi,
        },
      },
      {
        id: 5,
        name: 'Hey',
        description:
          'A social network built on Lens Protocol',
        favorite: false,
        link: 'https://hey.xyz/',
        icon: {
          url: dapps.hey,
        },
      },
      {
        id: 6,
        name: 'YouTube',
        description:
          'The place to watch videos from your favorite content creators all around the world.',
        favorite: false,
        link: 'https://youtube.com',
        icon: {
          url: dapps.youtube,
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
        name: 'Venice',
        description:
          'Private and Uncensored AI',
        favorite: false,
        link: 'https://venice.ai/',
        icon: {
          url: dapps.veniceai,
        },
      },
      {
        id: 4,
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
        id: 5,
        name: 'ENS',
        description: 'Decentralised naming for wallets, websites, & more',
        favorite: false,
        link: 'https://ens.domains',
        icon: {
          url: dapps.ens,
        },
      },
      {
        id: 6,
        name: 'Handshake',
        description: 'Decentralised naming for wallets, websites, & more',
        favorite: false,
        link: 'https://handshake.org',
        icon: {
          url: dapps.handshake,
        },
      },
      {
        id: 7,
        name: 'Metascore',
        description: 'Metascore offers comprehensive security ratings for web3 projects & real-time risk alerts.',
        favorite: false,
        link: 'https://score.metatrust.io',
        icon: {
          url: dapps.metatrust,
        },
      },
      {
        id: 8,
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
        id: 9,
        name: 'Polygon Portal',
        description: 'Manage, bridge, swap and receive crypto assets on Polygon network.',
        favorite: false,
        link: 'https://portal.polygon.technology/',
        icon: {
          url: dapps.polygonWallet,
        },
      },
      {
        id: 10,
        name: 'CoinGecko',
        description: 'View crypto charts live, market cap, and trading volume.',
        favorite: false,
        link: 'https://www.coingecko.com',
        icon: {
          url: dapps.coingecko,
        },
      },
      {
        id: 11,
        name: 'Superbridge',
        description:
          'Native bridging for rollups - bridge ETH, MASQ and other tokens easily',
        favorite: false,
        link: 'https://superbridge.app/',
        icon: {
          url: dapps.superbridge,
        },
      },
      {
        id: 12,
        name: 'Frame',
        description: 'A privacy focused Ethereum wallet that runs natively on macOS, Windows and Linux',
        favorite: false,
        link: 'https://frame.sh/',
        icon: {
          url: dapps.frameWallet,
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
    ],
  },
];
