import React , { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import aboutImg from '../../../assets/images/valiBeth.jpg';
import dockImg from '../../../assets/images/dock.jpg';
import lakeImg from '../../../assets/images/lakeMountain.jpg';
import sunsetImg from '../../../assets/images/sunset.jpg';

import classes from './About.css';

class About extends Component {
    render(){
        return(
        <div>
        <Container fluid>
            <Row  debug>
                <Col  debug lg={6} sm={12} md={12}>
                    <div className={classes.About} >
                        <img style={ {float: 'center'}} src={aboutImg} alt="MyImage"/>
                    </div>
                </Col>
                <Col debug lg={6} sm={12} md={12}>
                    <div>
                        <div>
                        <span>About Us</span>
                        <h2>Who Am I?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada est quis quam lacinia tempor. Quisque maximus sagittis vehicula. Nunc vitae ullamcorper diam, sed tincidunt nisi. Fusce et finibus justo. Integer eros nibh, imperdiet eu augue eget, molestie molestie eros. Maecenas elementum nibh id elit posuere condimentum. Duis lacinia felis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada est quis quam lacinia tempor. Quisque maximus sagittis vehicula. Nunc vitae ullamcorper diam, sed tincidunt nisi. Fusce et finibus justo. Integer eros nibh, imperdiet eu augue eget, molestie molestie eros. Maecenas elementum nibh id elit posuere condimentum. Duis lacinia felis.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row debug>
                <Col debug sm={12} md={6}>
                    <div>
                        <div>
                            <span>What I do?</span>
                            <h2>Here are some of my expertise</h2>
                        </div>
                        <div>
                            <div>
                            <div>
                                <h3>Web Development </h3>
                                <p>I am learning on a daily bases how to build websites using JavaScript,React,HTML,CSS</p>
                            </div>
                            </div>
                        <div>
                            <div>
                            <div>
                                <h3>RWD</h3>
                                <p>I'm learining more and more the concepts of Responsive Web Design</p>
                            </div>
                            </div>
                        </div>
                        
                            <div>
                                <h3>Data Bases</h3>
                                <p>I am learning more and more about Databases with MongoDB (NoSQL) and SQL in MySQL Workbench.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col debug sm={12} md={6} >
                    <h1>hello</h1>
                </Col>
            </Row>
        </Container>
        {/* <hr style={{color: "white"}}/> */}
        <Container fluid>
            <Row debug>
                <Col debug sm={12} md={4}>
                    <div className={classes.About} >
                        <img style={ {float: 'center'}}src={dockImg} alt="MyImage"/>
                    </div>
                </Col>
                <Col debug sm={12} md={4}>
                    <div className={classes.About} >
                        <img style={ {float: 'center'}}src={lakeImg} alt="MyImage"/>
                    </div>
                </Col>
                <Col debug sm={12} md={4}>
                    <div className={classes.About} >
                        <img style={ {float: 'center'}}src={sunsetImg} alt="MyImage"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        );
    }
}

export default About;