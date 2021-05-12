import React from 'react'
import And from '../../../../assets/images/about/and.png';
import Image from '../../../../components/commonComponents/imageContainer';
import { Container, Row, Col } from 'react-bootstrap';

export default function index() {
    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col xs={5} className="discpHeadMobileText text-right font-mobile-bigger">
                        <Row>
                            <Col><span>We Create</span></Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-center offset-1"><span className="">Brands</span></Col>
                        </Row>
                    </Col>
                    <Col xs={2}><Image src={And} width={'150%'} /></Col>
                    <Col xs={5} className="discpHeadMobileText font-mobile-bigger"><span>We Make Relations</span></Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={10} className="offset-1">
                        <p className="discpSubText font-mobile-text">
                            Our Ethics guide how we treat each other, make decision, and serve our customers.
                            We earn the trust for the INDANO brand through ethical and responsible conduct.
                            Fulfill our customers responsibilities through disciplined business practices.
                        </p>
                    </Col>
                    <Col xs={4} className="offset-4">
                        <hr className="hr"/>
                    </Col>
                    <Col xs={10} className="offset-1 mt-3">
                        <p className="discpSubText font-mobile-text">
                        We won’t stop pushing ahead, because you won’t stop pushing ahead.
                        You are reinventing. 
                        How you sell. How you live. With our services, you will reinvent your online sales.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
