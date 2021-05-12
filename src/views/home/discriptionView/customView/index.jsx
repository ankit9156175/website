import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Image from '../../../../components/commonComponents/imageContainer';
import DiscpImage from '../../../../assets/images/home/discription/Tile.png';


export default class index extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <span className="discpHead">Our Mission is to Create Brands & Make Relations.</span>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}  className="pt-5 text-size">
                        <p>
                            <span className="bold-text">INDANO E-COMMERCE SERVICES</span>, offers you a complete suite of E-Commerce services and claims to be among best service provider networks. 
                            INDANO is your perfect partner to launch you on Amazon, Flipkart, Tata Cliq, Ajio and Myntra. 
                            We are official partners of AMAZON & FLIPKART. We give GUARANTEED SERVICES 
                            with 100% refund If we are unable to complete your work on time.(T&CApplied)
                        </p>
                        <h4 className="orangeColor">Want To Take Your business Online?</h4>
                        <ul className="discpList">
                            <li>We give tip to toe solution for your every problem related to your account and you get your dedicated account manager for your account as well.</li>
                            <li>Here, we work keenly on your problems & suggestions.</li>
                            <li>You get each and every detail related to your account growth with monthly reports.</li>
                        </ul>
                    </Col>
                    <Col md={5}  className="offset-md-1">
                        <Image src={DiscpImage} width={'100%'} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
