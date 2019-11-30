import React from 'react';
import { Jumbotron, Col, Row, Image } from 'reactstrap';
import './intro.css';
import Background from '../../images/background.png';


const Intro = (props) => {
    return (
        <div id="home" className="intro">
            {/* <Jumbotron id="intro" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}> */}
                <Row>
                    <Col md="6">
                        <h1 className="display-3">Hi, you've reached my page.</h1>
                        <hr className="my-2" />
                        <p >My name is Zaya. I'm a learning web developer with a passion for technology.</p>
                    </Col>
                    <Col md="6">
                        <img className="cartoonImage" src="https://i.imgur.com/qtsVq5w.png" width="50%"></img>
                    </Col>
                </Row>
        </div>
    );
};

export default Intro;