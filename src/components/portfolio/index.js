import React, { Component } from 'react'
import {
    Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import budgetTracker from '../../images/budgettracker.png';
import fraigslist from '../../images/fraigslist.png';
import bamazon from '../../images/bamazon.png';
import trackerPreview from '../../images/trackerpreview.gif';


import './portfolio.css'

class Portfolio extends Component {
    state = {
        bamazonModal: false,
        budgetTrackerModal: false,
        fraigslistModal: false,
    }

    toggleBamazonModal = () => {
        this.setState({
            bamazonModal: !this.state.bamazonModal
        })
    };

    toggleBudgetTrackerModal = () => {
        this.setState({
            budgetTrackerModal: !this.state.budgetTrackerModal
        })
    };

    toggleFraigslistModal = () => {
        this.setState({
            fraigslistModal: !this.state.fraigslistModal
        })
    };

    budgetRepoRedirect = () => {
        window.open('https://github.com/BudgetManager1/BudgetManager');
    };

    // const Portfolio = (props) => {
    render() {
        return (
            <div className="background">
                <div className="portfolio fader">
                    <Container className="fluid">
                        <Row>
                            <Col xs="3">
                                <ScrollAnimation delay={1000} duration="1" animateIn='bounceInLeft' animateOut='bounceOutLeft'>
                                    <Card>
                                        <CardTitle><h3>Budget Tracker</h3></CardTitle>
                                        <CardImg className="images image-1" src={budgetTracker} alt="Preview of Budget Tracker" onClick={this.toggleBudgetTrackerModal} />
                                        <CardBody>
                                            <CardSubtitle>Built with MySQL, handlebars, JQuery, and NodeJs </CardSubtitle>
                                            <Button color="warning" onClick={this.budgetRepoRedirect}>GitHub Repo</Button>
                                        </CardBody>
                                    </Card>
                                </ScrollAnimation>
                            </Col>

                            <Col xs="3">
                                <ScrollAnimation  duration="1" animateIn='bounceInLeft' animateOut='bounceOutLeft'>
                                    <img className="images image-2" src={fraigslist} alt="Preview of Fraigslist" onClick={this.toggleFraigslistModal}></img>
                                </ScrollAnimation>
                            </Col>

                            <Col xs="3">
                                <ScrollAnimation delay={500} duration="1" animateIn='bounceInRight' animateOut='bounceOutRight'>

                                    <img className="images image-3" src={bamazon} alt="Preview of Bamazon" onClick={this.toggleBamazonModal}></img>
                                </ScrollAnimation>

                            </Col>
                            <Col xs="3">
                                <ScrollAnimation delay={1500} duration="1" animateIn='bounceInRight' animateOut='bounceOutRight'>
                                    asndgiuasdgoasjdgoijasdgoij
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="modals">
                    <div>
                        <Modal size="lg" id="bamazonModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleBudgetTrackerModal} isOpen={this.state.budgetTrackerModal} style={{ opacity: 1 }}>
                            <img className="gifs gif-1" src={trackerPreview} alt="Preview of budget tracker"></img>
                            <ModalBody>
                                <Container>
                                    <Row><strong>Budget Tracker</strong></Row>
                                    <Row>This is a simple to use app to help you manage where you're spending your money. Simply log in to view your personal data and check out where your money is going.</Row>
                                    <Row>If you just want to check out the site, use our dummy account.</Row>
                                    <Row>email: test@test.com || password: test</Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="justify-content-center" color="primary" onClick={this.toggleBudgetTrackerModal}>Live Site</Button>
                                <Button color="primary" onClick={this.toggleBudgetTrackerModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Modal id="bamazonModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleFraigslistModal} isOpen={this.state.fraigslistModal} style={{ opacity: 1 }}>
                            <ModalHeader>Test!</ModalHeader>
                            <ModalBody>asdfsadgasdgsadgasdsadgasdg.</ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleFraigslistModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Modal id="bamazonModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleBamazonModal} isOpen={this.state.bamazonModal} style={{ opacity: 1 }}>
                            <ModalHeader>Test!</ModalHeader>
                            <ModalBody></ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleBamazonModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
