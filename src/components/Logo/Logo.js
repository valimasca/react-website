import React from 'react';

import webLogo from '../../assets/images/web-logo.png';
import classes from './Logo.css';


const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}> 
        <img scr={webLogo} alt="MyWeb" />
    </div>
);

export default logo;