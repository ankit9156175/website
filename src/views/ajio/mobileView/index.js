import React from 'react'
import { Container, Row,Col,Image } from 'react-bootstrap'
import Rock from '../../../assets/images/ajio-img/FrameMob.png';

export default function index() {
    return (
        <Container style={{ marginTop: '30%' }}>
            <h1 className="serviceHeadText font-mobile-extra-bigger text-center">Ajio</h1>
            <h2 className="mt-3 text-muted font-weight-bold font-italic text-center">Onboarding</h2>
            <h4 className="mt-3 text-muted font-italic text-justify">Product samples are sent to the Ajio head office for quality check process. After the successful onboarding seller is set to hit the marketplace with products. Ajio gives bigger platform to sellers and bring market place near to sellers reach for better product sale.</h4>
            <Row className="mt-4 mb-5">
                <Col className="col-12">
                    <h3 className="text-orange font-weight-bold mb-3">Training</h3>
                    <Container className="col-10"><Image src={Rock} width={'100%'} className="mt-3 mb-4 mt-sm-0 pt-sm-0" /></Container>
                    <p className="mb-0 font-weight-bold text-justify">Get training on everything, how selling on Ajio works, day to day operations, how to check your orders, how to manage your Ajio account and so on.</p>
                </Col>
            </Row>
        </Container>
    )
}
