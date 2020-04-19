//This is the part that loads up when we order the burger.
//Not using it in the first part of my project
import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} 
    onClick={props.clicked}></div> : null
);

export default backdrop;