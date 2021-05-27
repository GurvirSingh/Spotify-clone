import { Avatar } from '@material-ui/core';
import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';

const Header = () => {
    const [{ user, token }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs or Podcasts" type="text"></input>
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="user icon" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
