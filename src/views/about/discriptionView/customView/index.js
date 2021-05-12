import React from 'react'
import And from '../../../../assets/images/about/and.png';
import Image from '../../../../components/commonComponents/imageContainer';
import { Container, Row, Col } from 'react-bootstrap';
export default function index() {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col md={5} className="discpImgText text-right">
                        <Row>
                            <Col><span>We Create</span></Col>
                        </Row>
                        <Row>
                            <Col md={6} className="text-right offset-md-4"><span className="">Brands</span></Col>
                        </Row>
                    </Col>
                    <Col md={2} className="pt-4"><Image src={And} width={'100%'} /></Col>
                    <Col md={5} className="discpImgText"><span>We Make Relations</span></Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={10} className="offset-1">
                        <p className="discpSubText text-center">
                            Our Ethics guide how we treat each other, make decision, and serve our customers.
                            We earn the trust for the INDANO brand through ethical and responsible conduct.
                            Fulfill our customers responsibilities through disciplined business practices.
                        </p>
                    </Col>
                    <Col xs={2} className="offset-5">
                        <hr className="hr"/>
                    </Col>
                    <Col xs={8} className="offset-2 mt-3">
                        <p className="discpSubText">
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
