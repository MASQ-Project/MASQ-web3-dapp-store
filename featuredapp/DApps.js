// from MASQ-web3-store Public repo - modified 6 Mar 2024
// to be imported to path: app/renderer/components/Main/DApps/DApps.js
// version 3.1

import React from 'react';
import Categories from './Categories';
import AppStore from './AppStore';

import { categoriesData } from '../../../configs/dapps.js';

import feature1 from '../../../assets/images/dapps/dapp_feat1_masq_banner.png';
import feature2 from '../../../assets/images/dapps/dapp_feat2_crucible-resized.png';
import feature3 from '../../../assets/images/dapps/dapp_feat3_FlufWorld.png';
import { addApp, removeAppFunc } from '../../../utils/Launcher';
import './DApps.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDock } from '../../../reducers/launcher';
import dapps from '../../../assets/images/dapps';
const featureAppData = [
    {
        name: 'MASQ.AI',
        link: 'https://masq.ai/',
        description:
            'Ask MASQ questions naturally to an AI-Powered assistant, directly from the MASQ Knowledge Base',
        banner: feature1,
        favorite: false,
        icon: {
            url: 'https://docs.masq.ai/masq/getting-started/what-is-MASQ?q=',
        },
    },
];

const DApps = (props) => {
    const {size} = props
    const [selectItem, setSelectItem] = React.useState({});
    const [categories, setCategories] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [appListData, setAppListData] = React.useState([]);
    const storeApps = window.api.getStoreValue('launcher.apps')[window.api.getStoreValue('workspace')]
    const presenceArray = appListData.map(itemB => storeApps.some(itemA => itemA.link.includes(itemB.name.toLowerCase())));
    const searchParams = ['name'];
    React.useEffect(() => {
        setSelectItem(categoriesData[0]);
        setCategories(categoriesData);
    }, []);
    const dispatch = useDispatch()
    const truthy = useSelector(state => state.launcher.truthy)
    const handleClickFavorite = async (item, status) => {
        if (!item || typeof item !== 'object') {
            return;
        }
        if (status) {
            addApp(item);
            dispatch(toggleDock(!truthy))
            // dispatch(toggleDock(true))
        } else {
            removeAppFunc(item.link);
            dispatch(toggleDock(!truthy))
            // dispatch(toggleDock(false))
        }
    };


    const handleSetQuery = query => {
        setSearchQuery(query);
    };

    React.useEffect(() => {
        if (searchQuery === '')
            return setAppListData(selectItem.d_apps ? selectItem.d_apps : []);
        let appList = [];
        categories.forEach(category => {
            console.log(category)
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
        }

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
                size={size}
                category={selectItem}
                featureAppData={featureAppData}
                appListData={appListData}
                isPresent={presenceArray}
                onClickFavorite={handleClickFavorite}
                searchQuery={searchQuery}
            />
        )}
    </div>
    );
};

export default DApps;
