import React , { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import aboutImg from '../../../assets/images/valiBeth.jpg';
import classes from './About.css';

class About extends Component {
    render(){
        return(
        <div>
        <Container fluid>
            <Row debug>
                <Col  debug md={8}>
                    <div className={classes.Logo} >
                        <img src={aboutImg} alt="MyImage"/>
                    </div>
                </Col>
                <Col debug  md={4}>
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
                <Col debug md={6}>
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
                <Col debug md={6} >
                    <h1>hello</h1>
                </Col>
            </Row>
        </Container>
        </div>
        );
    }
}

export default About;