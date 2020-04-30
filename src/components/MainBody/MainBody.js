import React, { Component } from 'react';

import About from './About/About';
// import Introduction from './Introduction/Introduction';
// import Sidebar from './Sidebar/Sidebar';
// import Timeline from './Timeline/Timeline';

class MainBody extends Component {
    render() {
        return(
        <div>
            <div>
			    <About></About>
      	    </div>
        </div>
        )
    }
}

export default MainBody;