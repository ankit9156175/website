import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Group from '../../../assets/images/tatacliq-img/Group.png';
import Tick from '../../../assets/images/amazon-global-img/tick.png';

export default function index() {
    return (
        <Container style={{ marginTop: '30%' }}>
            <h1 className="serviceHeadText font-mobile-extra-bigger text-center">TataCliq</h1>
            <h5 className="mt-3 text-muted font-italic text-justify font-weight-bold">Its one of leading e-commerce platform around indian marketplace. Tatacliq give their sellers appropriate chance to get onboard for online selling</h5>
            <Row className="mt-5">
                <Col className="col-12">
                    <h3 className="text-orange font-weight-bold mb-3">Seller's Training</h3>
                    <Container className="col-10 mb-4"><Image src={Group} width={'100%'} className="pt-3 mt-sm-0 pt-sm-0"/></Container>
                    <p className="font-weight-bold">Get training on everything, how selling on Tataclip works, day to day operations, how to check your orders, how to manage your Tatacliq account and so on.</p>
                    <p className="font-weight-bold">There are few documents needed for seller onboard process:</p>
                    <ul className="font-weight-bold">
                        <li>PAN card</li>
                        <li>GST certificate</li>
                        <li>CIN</li>
                        <li>Cancelled cheque</li>
                        <li>Company logo</li>
                        <li>Bank confirmation on electronic clearence form with attachment.</li>
                    </ul>
                </Col>
            </Row>
            <h2 className=" mt-3 text-center serviceHeadText font-mobile-biggerr">Benefits of selling with Tatacliq</h2>
            <Row className="mt-4 mb-5">
                <Col className="col-6 font-weight-bold"><p><Image src={Tick}/><span>Plethora of customers</span></p>
                <Image src={Tick}/>
                    <span>Valuable tips</span></Col>
                <Col className="col-6 font-weight-bold"><p><Image src={Tick}/><span>Easily monitor your sales</span></p>
                <Image src={Tick}/><span>Transparency</span></Col>
            </Row>
        </Container>
    )
}
