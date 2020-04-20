import React, { Component } from 'react';

import About from './About/About';
// import Introduction from './Introduction/Introduction';
// import Sidebar from './Sidebar/Sidebar';
// import Timeline from './Timeline/Timeline';

class MainBody extends Component {
    render() {
        return(
        <div id="colorlib-page">
            <div id="container-wrap">
         	    {/* <Sidebar></Sidebar> */}
				<div id="colorlib-main">
					{/* <Introduction></Introduction> */}
					<About></About>
					{/* <Timeline></Timeline> */}
          	    </div>
      	    </div>
        </div>
        )
    }
}

export default MainBody;