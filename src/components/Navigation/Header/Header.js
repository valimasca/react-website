// This is the toolbar
import React from 'react';

import classes from './Header.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToogle';

const toolbar = (props) => (
    <header className={classes.Header}>
        <DrawerToggle clicked={props.drawerToggleClicked}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </DrawerToggle>
    </header>
);

export default toolbar;