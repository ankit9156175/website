import React from 'react'
import { Container, Row,Col,Image } from 'react-bootstrap'
import Rock from '../../../assets/images/ajio-img/Frame.png';
export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <h1 className="serviceHeadText font-mobile-biggerr">Ajio</h1>
            <h2 className="mt-3 text-muted font-weight-bold font-italic">Onboarding</h2>
            <h4 className="mt-3 text-muted font-italic">Product samples are sent to the Ajio head office for quality check process. After the successful onboarding seller is set to hit the marketplace with products. Ajio gives bigger platform to sellers and bring market place near to sellers reach for better product sale.</h4>
            <Row className="m-5">
                <Col className="col-6 pt-5">
                    <h1 className="text-orange font-weight-bold mb-3">Training</h1>
                    <p className="mb-0 text-size">Get training on everything,how</p>
                    <p className="mb-0 text-size">selling on Ajio works,day to day</p>
                    <p className="mb-0 text-size">operations, how to check your</p>
                    <p className="mb-0 text-size">orders, how to manage your</p>
                    <p className="mb-0 text-size">Ajio account and so on.</p>
                </Col>
                <Col className="col-6">
                <Image src={Rock} width={'90%'} className="mt-5 mt-sm-0 pt-sm-0" />
                </Col>
            </Row>
        </Container>
    )
}
