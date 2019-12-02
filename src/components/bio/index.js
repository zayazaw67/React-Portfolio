import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import Pic from '../../images/pic.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

import './bio.css';


const Bio = () => {
  return (
    <div className="bio">
      <Container>
        <Row>
          <Col>
            <Media>
              <Media left href="#">
                <ScrollAnimation animateIn='wobble'
                  initiallyVisible={true}>
                  <Media className="picture" object src={Pic} alt="Profile picture" />
                </ScrollAnimation>
              </Media>
              <Media body className="details">
                <ScrollAnimation delay={1000} animateIn='bounce'
                  initiallyVisible={true}
                  animateOnce={true}>
                  <Row><strong>About Me</strong></Row>
                  <Row>asidugbaisudgbhiasugbd</Row>
                </ScrollAnimation>

              </Media>
            </Media>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Bio;