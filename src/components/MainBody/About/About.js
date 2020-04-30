import React , { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import aboutImg from '../../../assets/images/valiBeth.jpg';
import dockImg from '../../../assets/images/dock.jpg';
import lakeImg from '../../../assets/images/lakeMountain.jpg';
import sunsetImg from '../../../assets/images/sunset.jpg';
import facebookImg from '../../../assets/socialmedia/facebook.png';
import betheltechImg from '../../../assets/socialmedia/betheltech.png';
import bootstrapImg from '../../../assets/socialmedia/bootstrap.png';
import githubImg from '../../../assets/socialmedia/github.png';
import linkedinImg from '../../../assets/socialmedia/linkedin.png';
import mongodbImg from '../../../assets/socialmedia/mongodb.png';
import reactImg from '../../../assets/socialmedia/react.png';
import udemyImg from '../../../assets/socialmedia/udemy.png';
import w3schoolsImg from '../../../assets/socialmedia/w3schools.png';
import angularImg from '../../../assets/socialmedia/angular.png';
import bethelchurchImg from '../../../assets/socialmedia/bethelchurch.png';
import expressjsImg from '../../../assets/socialmedia/expressjs.png';


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
                <Col  debug sm={12} md={6} className={classes.About}>
                    <section>
                   <h1>Helpful Resources</h1>
                    <ul>
                       <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                           <li><img src={facebookImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>Facebook</li>
                       </a>
                       <a href="https://www.linkedin.com/in/vali-l-masca/" rel="noopener noreferrer" target="_blank">
                           <li><img src={linkedinImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>LinkedIn</li>
                        </a>
                        <a href="https://github.com/valimasca" rel="noopener noreferrer" target="_blank">
                            <li><img src={githubImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>GitHub</li>
                        </a>
                        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                            <li><img src={reactImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>React.js</li>
                        </a>
                        <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank">
                            <li><img src={mongodbImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>MongoDB</li>
                        </a>
                        <a href="https://www.angular.io/" rel="noopener noreferrer" target="_blank">
                            <li><img src={angularImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>Angular JS</li>
                        </a>
                        <a href="https://www.expressjs.com/" rel="noopener noreferrer" target="_blank">
                            <li><img src={expressjsImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>Express JS</li>
                        </a>
                        <a href="https://sealninja.github.io/react-grid-system/#section-introduction" rel="noopener noreferrer" target="_blank">
                            <li><img src={bootstrapImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>React Grid System</li>
                        </a>
                        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" rel="noopener noreferrer" target="_blank">
                            <li><img src={udemyImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>React Udemy Course</li>
                        </a>
                        <a href="https://betheltech.net/" rel="noopener noreferrer" target="_blank">
                            <li><img src={betheltechImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>Bethel Tech</li>
                        </a>
                        <a href="https://www.w3schools.com/" rel="noopener noreferrer" target="_blank">
                            <li><img src={w3schoolsImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>W3 Schools</li>
                        </a>
                        <a href="https://www.bethel.com/" rel="noopener noreferrer" target="_blank">
                            <li><img src={bethelchurchImg} alt="Smiley face" style={{height: '30px', width: '30px'}}/>Bethel Church</li>
                        </a>
                    </ul>
                   </section>
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