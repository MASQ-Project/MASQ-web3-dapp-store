// from MASQ-web3-store Public repo - modified 5 Jan 2025
// to be imported to path: app/renderer/components/Main/DApps/DApps.js
// version 5.0

import React, {useState} from 'react';
import Categories from './Categories';
import AppStore from './AppStore';
import classNames from 'classnames';
import { categoriesData } from '../../../configs/dapps.js';

import HeaderIcon from '../../Main/Header/HeaderIcon';
import closeIcon from '../../../assets/images/close.svg';
import maximizeIcon from '../../../assets/icons/maximize-icon.svg';
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
        link: 'https://docs.masq.ai/masq?q=',
        description:
            'Ask MASQ questions naturally to an AI-Powered assistant, directly from the MASQ Knowledge Base',
        banner: feature1,
        favorite: false,
        icon: {
            url: dapps.masq_icon,
        },
    },
];

const DApps = (props) => {
    const { size, onClick, appElement, onMinimizeHandle, setDappPosition, DappInitialPosition, setSize, setDappMaximized,dappMaximized} = props
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

    const handleMaximizeWindow = () => {
        setDappMaximized(prev => !prev);
        if (!dappMaximized) {
            // have a width of 97%
            const width = 0.97 * window.innerWidth;
            // have height 0f 82%
            const height = 0.82 * window.innerHeight;
            const centerX = (window.innerWidth - width) / 2 + 44.25;
            const centerY = (window.innerHeight - height) / 2 - 51.15;
            setDappPosition({ x: centerX, y: centerY });
            setSize({ width: width, height: height });
        } else {
            setDappPosition({
                x: window.innerWidth / 2 - 500,
                y: window.innerHeight / 2 - 350,
            });
            setSize({ width: 1150, height: 600 });
        }
    };

    const handleCloseWindow = () => {
        onMinimizeHandle('dapp');
        setDappPosition(DappInitialPosition);
        setSize({
            width: 1170,
            height: 600,
        });
        setDappMaximized(false);
    };

    return (
        <div className='dApps' onClick={onClick}>
            <div className={classNames('handle')}>
                <div className='btnWrap'>
                    <div className='maximize' onClick={handleMaximizeWindow}>
                        <img src={maximizeIcon} />
                    </div>
                    <div
                        className='btnWrap_minimize'
                        onClick={handleCloseWindow}
                    >
                        <img src={closeIcon} />
                    </div>

                    {/* <HeaderIcon
                        image={maximizeIcon}
                        classname={'buttons maximize'}
                        onClick={handleMaximizeWindow}
                    /> */}
                </div>
                <div className='handle-title'>
                    <img src={appElement.item.icon.url}></img>
                    <span>{appElement.item.name}</span>
                </div>
            </div>
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