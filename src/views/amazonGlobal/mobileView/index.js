import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Shop from '../../../assets/images/amazon-global-img/shop.png';
import Africa from '../../../assets/images/amazon-global-img/Africaa.svg';
import America from '../../../assets/images/amazon-global-img/Americaa.svg';
import Europe from '../../../assets/images/amazon-global-img/Europee.svg';
import Asia from '../../../assets/images/amazon-global-img/Asiaa.svg';

export default function index() {
    return (
        <div>
        <Container style={{ marginTop: '30%' }}>
            <h1 className="serviceHeadText font-mobile-extra-bigger text-center">Amazon.Global</h1>
            <h5 className="mt-4 text-muted font-italic text-center">Amazon global is the seprate international marketplace of Amazon where anyone can register themselves and start selling
                their product internationally.</h5>
            <h1 className="serviceHeadText font-mobile-extra-bigger mt-4 text-center">Procedure to start selling globally</h1>
            <Row className="mt-4 mb-4">
                    <Image src={Shop} width={'100%'} className=" mt-sm-0 pt-sm-0" />
                
            </Row>
            <Row><Col className="col-12 pt-4 font-weight-bold">
                    <ul>
                        <li>Choose The Marketplace</li>
                        <li>Register For Your international Seller Account</li>
                        <li>Provide Your Business Details</li>
                        <li>Start Selling Internationally</li>
                    </ul>
                </Col></Row>
            <h1 className="serviceHeadText font-mobile-biggerr mt-4 text-center">Benefits Of Amazon Global</h1>
            <ul className="font-weight-bold tick">
                <li>Reach Hundreds Of Millions Of Customer's</li>
                <li>Increase Sales From Festival Demands Across The World</li>
                <li>Earn In Dollars,Pounds And Euros. Get Paid In Rupees</li>
            </ul>
            </Container>
            <div className="getTouch">
                <Container>
                    <h6 className="font-weight-bold font-italic mb-0 mt-4 pt-5 text-center text-size">Amazon works with 53 Global Domains around the Globe, In 4 different Continents</h6>
                    <h6 className="font-weight-bold font-italic mb-4 mt-2  text-center text-size">WE PROVIDE SERVICES FOR 4 CONTINENTS IN THESE COUNTRIES</h6>
                    <Row className="mt-5 pb-4">
                        <Col className="col-12">
                        <Image src={Africa} width={'90%'} className="mx-auto"/>
                        </Col>
                        </Row>
                        <Row>
                        <Col className="col-12">
                        <Image src={America} width={'90%'} className="mx-auto mt-1"/>
                        </Col>
                        </Row>
                        <Row>
                        <Col className="col-12">
                        <Image src={Europe} width={'100%'} className="mx-auto mt-4"/>
                        </Col>
                        </Row>
                        <Row>
                        <Col className="col-12">
                        <Image src={Asia} width={'100%'} className="mx-auto mt-4 pb-5"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
