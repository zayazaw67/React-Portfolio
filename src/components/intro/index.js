import React from 'react';
import { Col, Row } from 'reactstrap';
import './intro.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Intro = (props) => {
    return (
        <div id="home" className="intro">
            {/* <Jumbotron id="intro" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}> */}
            <Row>
                <Col md="6">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <h1 className="display-3">Hi, you've reached my page.</h1>
                    </ScrollAnimation>
                    <hr className="my-2" />
                    <ScrollAnimation delay={500} animateIn='fadeIn' animateOnce={true}>
                        <p >My name is Zaya. I'm a learning web developer with a passion for technology.</p>
                    </ScrollAnimation>

                </Col>
                <Col md="6">
                    <ScrollAnimation delay={2000} duration={4}
                        animateIn='hinge'
                        initiallyVisible={true}
                        animateOnce={true}>

                        <img className="cartoonImage" src="https://i.imgur.com/qtsVq5w.png" width="50%" alt="Cartoon of programmer"></img>
                    </ScrollAnimation>
                </Col>
            </Row>
        </div>
    );
};

export default Intro;