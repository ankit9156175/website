import React, { Component } from 'react';
import { Container, Image, Row, Col, Form, Button, } from 'react-bootstrap';
import Banner from '../../../assets/images/contact-us/contactBanner.png';
import FacebookOrg from '../../../assets/images/social/fb.png';
import InstagramOrg from '../../../assets/images/social/insta.png';
import LinkedinOrg from '../../../assets/images/social/linkdin.png';
import Facebook from '../../../assets/images/social/fbbb.png';
import Instagram from '../../../assets/images/social/download.jpg';
import Linkedin from '../../../assets/images/social/linkk.png';
import map from '../../../assets/images/contact-us/map.png';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            hover1: false,
            hover2: false
        };
    }
    render() {
        return (
            <Container fluid className="p-0">
                <div style={{ marginTop: '6%' }}>
                    <Image src={Banner} width={'100%'} className="mt-5 mt-sm-0 pt-sm-0" />
                </div>
                <Container className="col-10 mt-5 mb-5">
                    <Row>
                        <Col className="col-3 brdr font-weight-bold">
                            <h1 className="companyHeadText mb-4">Address</h1>
                            <p className="text-size mb-0">Ground Floor F-76 </p>
                            <p className="text-size mb-0">Adhyapak Nagar,</p>
                            <p className="text-size mb-0">Nangloi, New Delhi</p>
                            <p className="text-size mb-0">Pin Code-110041</p>
                        </Col>
                        <Col className="col-5 ml-5 brdr font-weight-bold">
                            <h1 className="companyHeadText mb-4">Phone/Email</h1>
                            <p className="text-size mb-0">+91-7985435146(Official) </p>
                            <p className="text-size mb-0">info@indano.in(Official)</p>
                            <p className="text-size mb-0">info.indano@gmail.com(Seller support)</p>
                            <p className="text-size mb-0">+91-9311079540(Seller support)</p>
                        </Col>
                        <Col className="col-3 ml-4 font-weight-bold">
                            <h1 className="companyHeadText mb-4">media</h1>
                            <Row>
                                <Col href="/">
                                    <span className="pointer" onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
                                        <Image src={this.state.hover ? FacebookOrg : Facebook} width={'90%'} />
                                    </span>
                                </Col>
                                <Col href="/">
                                    <span className="pointer" onMouseEnter={() => this.setState({ hover1: true })} onMouseOut={() => this.setState({ hover1: false })}>
                                        <Image src={this.state.hover1 ? InstagramOrg : Instagram} width={'90%'} />
                                    </span>
                                </Col>
                                <Col>
                                    <span className="pointer" onMouseEnter={() => this.setState({ hover2: true })} onMouseOut={() => this.setState({ hover2: false })}>
                                        <Image src={this.state.hover2 ? LinkedinOrg : Linkedin} width={'90%'} />
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* map starts here */}
                <Container>
                    <Image src={map} width={'100%'} className="mt-5 mt-sm-0 pt-sm-0 mb-4 cursor" />
                </Container>
                {/* get in touch starts */}
                <Container fluid className="getTouch pb-5">
                    <Container className="mt-3 mb-2">
                        <Row>
                            <Col md={6} className="mt-5">
                                <h1 className="companyHeadText font-mobile-biggerr">Get In Touch With Us</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-3">
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <h5 className="mt-2 mb-4">Our experts will contact you back shortlyto discuss your plans and goals.</h5>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Control type='text' placeholder='Your Name' className="homeName mb-2" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type='email' placeholder='Email' className="homeName" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-md-3 mt-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control type='number' placeholder="Phone No." className="homeName" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type='text' placeholder="Company" className="homeName"/>
                                        </Col>
                                    </Row>
                                    <Row><Col md={12}>
                                        <Form.Control type='text' placeholder="Type your message" className="height homeName" />
                                    </Col></Row>
                                    <Row className="mt-5 ">
                                        <Col md={4} className="mt-md-0">
                                            <Button type="submit" className="homeFormBtn submitBtn">
                                                Submit
                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}