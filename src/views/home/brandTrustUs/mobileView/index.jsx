import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap';

import Image from '../../../../components/commonComponents/imageContainer';
import AmazonLogo from '../../../../assets/images/home/partner/amazonLogo.png';
import AjioLogo from '../../../../assets/images/home/partner/ajioLogo.png';
import MyntraLogo from '../../../../assets/images/home/partner/myntraLogo.png';
import FlipkartLogo from '../../../../assets/images/home/partner/flipkartLogo.png';
import TataLogo from '../../../../assets/images/home/partner/tataLogo.png';

export default class index extends Component {
    render() {
        return (
            <Container fluid className="mt-5">
                <Row>
                    <Col md={10} className="offset-md-1">
                        <h1 className="text-center serviceHeadText font-mobile-bigger">Our Service Partner</h1>
                    </Col>
                </Row>
                <Container className="mt-4 mb-3">
                    <Row>
                        <Col className="col-4">
                            <Image src={AmazonLogo} width={'100%'} />
                        </Col>
                        <Col className="col-4">
                            <Image src={FlipkartLogo} width={'100%'} />
                        </Col>
                        <Col className="col-4">
                            <Image src={MyntraLogo} width={'100%'} />
                        </Col>
                        
                    </Row>
                    <Row className="mt-3">
                    <Col  className="col-4 offset-2 mt-1">
                            <Image src={AjioLogo} width={'80%'} />
                        </Col>
                        <Col className="col-4 ml-2">
                            <Image src={TataLogo} width={'80%'} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
