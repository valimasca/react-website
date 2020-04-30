import React, { Component } from 'react';

import About from './About/About';
import Footer from './Footer/Footer';

class MainBody extends Component {
    render() {
        return(
        <div>
            <div>
			    <About></About>
                <Footer></Footer>
      	    </div>
        </div>
        )
    }
}

export default MainBody;