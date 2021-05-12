import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap';

import Image from '../../../../components/commonComponents/imageContainer';
import AmazonLogo from '../../../../assets/images/home/partner/amazonLogo.png';
import AjioLogo from '../../../../assets/images/home/partner/ajioLogo.png';
import MyntraLogo from '../../../../assets/images/home/partner/myntraLogo.png';
import FlipkartLogo from '../../../../assets/images/home/partner/flipkartLogo.png';
import TataLogo from '../../../../assets/images/home/partner/tataLogo.png';

export default class Index extends Component {
    render() {
        return (
            <Container fluid className="mt-5">
                <Row>
                    <Col md={10} className="offset-md-1">
                        <h1 className="text-center serviceHeadText">Our Service Partner</h1>
                    </Col>
                </Row>
                <Container className="mt-4 mb-5">
                    <Row>
                        <Col xs={2} className="offset-1 pr-5">
                            <Image src={AmazonLogo} width={'100%'} />
                        </Col>
                        <Col xs={2} className="pr-5">
                            <Image src={FlipkartLogo} width={'100%'} />
                        </Col>
                        <Col xs={2} className="pr-5">
                            <Image src={MyntraLogo} width={'100%'} />
                        </Col>
                        <Col xs={2} className="pr-5">
                            <Image src={AjioLogo} width={'80%'} />
                        </Col>
                        <Col xs={2} className="pr-5">
                            <Image src={TataLogo} width={'80%'} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
