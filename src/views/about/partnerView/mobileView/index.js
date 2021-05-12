import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Image from '../../../../components/commonComponents/imageContainer';
export default function index(props) {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <Col>
                    <h2 className="discpHead font-mobile-extra-bigger text-center">Official Partner</h2>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={10} className="offset-1">
                        <Row>
                        {props.data.map((img, index)=>(
                        <Col xs={6} key={index}><Image src={img.imgUrl} width={img.width} /></Col>
                    ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
