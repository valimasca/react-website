import React , { Component } from 'react';

import classes from './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div className={classes.Footer}>
                <p>Company © Vali Masca - All rights reserved.</p>
                <p>Contact me @ valer.masca@gmail.com</p>
            </div>
        )
    }
}

export default Footer;