import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export default class GetTouchSection extends Component {
    render() {
        return (
            <Container fluid className="getTouch pb-5">
                <Container className="mt-3 mb-2">
                    <Row>
                        <Col md={6} className="mt-5">
                            <h1 className="font-mobile-biggerr bold-text orangeLight text-center text-md-left">Get In Touch With Us</h1>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-3">
                    <Row>
                        <Col md={12}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control type='text' placeholder='Enter Your Name' className="homeName mb-2" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control type='email' placeholder='Email Id'  />
                                    </Col>
                                </Row>
                                <Row className="mt-md-3 mt-2">
                                    <Col md={10}>
                                        <Form.Control type='number' placeholder="Phone No" />
                                    </Col>
                                    <Col md={2} className="mt-2 mt-md-0">
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
        )
    }
}
