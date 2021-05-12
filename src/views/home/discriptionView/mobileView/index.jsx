import React, { useEffect } from 'react'
import Aos from 'aos';
import { Col, Container, Row } from 'react-bootstrap';

const DiscpMobileView = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
    }, []);

    return (
        <Container fliud>
            <Row data-aos="fade-up">
                <Col className="text-center">
                    <span className="discpHead font-mobile-extra-bigger">Our Mission is to Create Brands & Make Relations.</span>
                </Col>
            </Row>
            <Row className="mt-4" data-aos="fade-up">
                <Col className="font-mobile-text">
                    <p className="text-center">   <span className="bold-text">INDANO E-COMMERCE SERVICES</span>, offers you a complete suite of E-Commerce services and claims to be among best service provider networks.
                             INDANO is your perfect partner to launch you on Amazon, Flipkart, Tata Cliq, Ajio and Myntra.
                             We are official partners of AMAZON & FLIPKART. We give GUARANTEED SERVICES
                             with 100% refund If we are unable to complete your work on time.(T&CApplied)
                         </p>
                    <h4 className="orangeLight font-mobile-bigger text-center">Want To Take Your business Online?</h4>
                    <ul className="discpList">
                        <li>We give tip to toe solution for your every problem related to your account and you get your dedicated account manager for your account as well.</li>
                        <li>Here, we work keenly on your problems & suggestions.</li>
                        <li>You get each and every detail related to your account growth with monthly reports.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default DiscpMobileView;