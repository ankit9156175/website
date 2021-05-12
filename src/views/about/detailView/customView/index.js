import React from 'react'
import {Container, Col} from 'react-bootstrap';
import LeftRightScroll from '../../../../components/scrollComponent/leftRightScroll';
export default function index(props) {
    return (
        <Container>
            <h3 className="serviceHeadText text-center">Services</h3>
            <Col md={12} className="mt-2">
            <p className="companySubHeadtext text-center">We are Official service partners of Amazon and Flipkart. We also give services for Myntra, tatacliq & Ajio.</p>
            </Col>
            <div>
                <LeftRightScroll leftRight={true} smallText={true} data={props.serviceData} />
            </div>
        </Container>
    )
}
