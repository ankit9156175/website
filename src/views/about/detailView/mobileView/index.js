import React from 'react'
import {Container, Col} from 'react-bootstrap';
import BottomUpScroll from '../../../../components/scrollComponent/bottomUpScroll';
export default function index(props) {
    return (
        <Container>
            <h3 className="discpHead text-center font-mobile-extra-bigger">Services</h3>
            <Col md={12} className="mt-2">
            <p className="companySubHeadText text-center">We are Official service partners of Amazon and Flipkart. We also give services for Myntra, tatacliq & Ajio.</p>
            </Col>
            <div className="text-center">
                <BottomUpScroll data={props.serviceData} />
            </div>
        </Container>
    )
}
