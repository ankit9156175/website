import React, { Component } from 'react';
import { Container, Image, Row, Col, Form, Button, } from 'react-bootstrap';
import Banner from '../../../assets/images/contact-us/contactBanner.png';
import map from '../../../assets/images/contact-us/map.png';
export default class Index extends Component {
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
                <Container className="col-10 mt-4">
                    <Row>
                        <Col className="col-12 font-weight-bold">
                            <h1 className="font-mobile-bigger mb-3 font-color">Address</h1>
                            <p className="mb-0">Ground Floor F-76 </p>
                            <p className="mb-0">Adhyapak Nagar,</p>
                            <p className="mb-0">Nangloi, New Delhi</p>
                            <p className="mb-0">Pin Code-110041</p>
                        </Col>
                        <Col className="col-12 font-weight-bold mt-4">
                            <h1 className="font-mobile-bigger mb-3 font-color">Phone/Email</h1>
                            <p className="mb-0">+91-7985435146(Official) </p>
                            <p className="mb-0">info@indano.in(Official)</p>
                            <p className="mb-0">info.indano@gmail.com(Seller support)</p>
                            <p className="mb-0">Pin Code-110041</p>
                        </Col>
                    </Row>
                </Container>

                {/* map starts here */}
                <Image src={map} width={'100%'} className="mt-4 cursor" />

                {/* get in touch starts */}
                <Container fluid className="getTouch pb-5">
                    <Container className="mt-3 mb-2">
                        <Row>
                            <Col md={6} className="mt-5">
                                <h1 className="serviceHeadText font-mobile-bigger">Get In Touch With Us</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-3">
                        <Row>
                            <Col md={12}>
                                <Form>
                                    {/* <h5 className="mt-2 mb-4">Our experts will contact you back shortlyto discuss your plans and goals.</h5> */}
                                    <Row>
                                        <Col md={6}>
                                            <Form.Control type='text' placeholder='Your Name' className="homeName mb-3" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type='email' placeholder='Email or Phone No.' />
                                        </Col>
                                    </Row>
                                    {/* <Row className="mt-md-3 mt-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control type='number' placeholder="Phone No." />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type='text' placeholder="Company" />
                                        </Col>
                                    </Row> */}
                                    <Row><Col md={12}>
                                        <Form.Control type='text' placeholder="Type your message" className="height mt-3" />
                                    </Col></Row>
                                    <Row className="mt-3 ">
                                        <Col md={4} className="mt-md-0">
                                            <Button type="submit" className="homeFormBtn submitBtn ml-0">
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