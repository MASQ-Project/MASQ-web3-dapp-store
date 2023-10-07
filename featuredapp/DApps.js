// from MASQ-web3-store Public repo - modified 7 Oct 2023
// to be imported to path: app/components/Main/DApps/DApps.js
// version 2.0

import React from 'react';
import Categories from './Categories';
import AppStore from './AppStore';

import { categoriesData } from '../../../configs/dapps.js';

import feature1 from '../../../assets/images/dapps/dapp_feat1_masq_banner.png';
import feature2 from '../../../assets/images/dapps/dapp_feat2_crucible-resized.png';
import feature3 from '../../../assets/images/dapps/dapp_feat3_FlufWorld.png';
import { addApp, removeApp } from '../../../utils/Launcher';
import './DApps.scss';

const Store = require('electron-store');
const store = new Store();

const featureAppData = [
  {
    name: 'MASQ Network',
    link: 'https://masq.ai/',
    description:
      'Discover how MASQ is building the borderless browser for the web3 ecosystem',
    banner: feature1,
    favorite: false,
    icon: {
      url: './assets/images/dapps/dapp_feat1_masq_banner.png',
    },
  },
  {
    name: 'Crucible',
    link: 'https://crucible.alchemist.wtf/',
    description:
      'A Crucible is an ERC-721 NFT that acts as a universal wallet for DeFi',
    banner: feature2,
    favorite: false,
    icon: {
      url: './assets/images/dapps/dapp_CrucibleByAlchemist.png',
    },
  },
  {
    name: 'Fluf World',
    link: 'https://fluf.world/',
    description:
      'Fluf World is a metaverse ecosystem of NFT character collectables and a global, creative community.',
    banner: feature3,
    favorite: false,
    icon: {
      url: './assets/images/dapps/dapp_FlufWorld.png',
    },
  },
];

const DApps = () => {
    const [selectItem, setSelectItem] = React.useState({});
    const [categories, setCategories] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [appListData, setAppListData] = React.useState([]);
    const searchParams = ['name'];
    React.useEffect(() => {
        setSelectItem(categoriesData[0]);
        setCategories(categoriesData);
    }, []);

    const handleClickFavorite = async (item, status) => {
        if (!item || typeof item !== 'object') {
            return;
        }
        if (status) {
            addApp(item);
        } else {
            removeApp(item.link);
        }
    };

    const handleSetQuery = query => {
        setSearchQuery(query);
    };

    React.useEffect(() => {
        if (searchQuery === '')
            return setAppListData(selectItem.d_apps ? selectItem.d_apps : []);
        let appList = [];
        categories.forEach(category =>
            category.d_apps.forEach(item => {
                if (
                    searchParams.some(param =>
                        item[param]
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    ) &&
                    !appList.some(appItem => appItem.name === item.name)
                ) {
                    appList.push(item);
                }
            })
        );
        setAppListData(appList);
    }, [searchQuery, selectItem]);

    return (
        <div className='dApps'>
            {/* <div className="dApps__gradient" /> */}
            <Categories
                data={categories}
                activeItem={selectItem}
                setActiveItem={item => setSelectItem(item)}
                setQuery={handleSetQuery}
                searchQuery={searchQuery}
            />
            {selectItem.icon && categories.length > 0 && (
                <AppStore
                    category={selectItem}
                    featureAppData={featureAppData}
                    appListData={appListData}
                    onClickFavorite={handleClickFavorite}
                    searchQuery={searchQuery}
                />
            )}
        </div>
    );
};

export default DApps;
