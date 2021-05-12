import React, { useEffect } from 'react'
import Aos from 'aos';
import index from '../../commonComponents/imageContainer';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../../commonComponents/imageContainer'

const Scrolling = (props) => {
    useEffect(() => {
        Aos.init({
            disable: 'mobile',
            duration: 2000,
            offset: 500
        });
    }, []);

    return (
        <div className="mt-5">
            {!props.smallText ? (
                <div>
                    {props.leftRight ?
                        (
                            <Container fluid>
                                {props.data.map((serviceD, index) => (
                                    index % 2 === 0 ? (

                                        <Row>
                                            <Col xs={5} data-aos="fade-right">
                                                <div className="mt-5">
                                                    <p className="companyHeadText pt-md-3 mt-5">{serviceD.title}</p>
                                                    <p className="tileDiscription">{serviceD.text}</p>
                                                </div>
                                            </Col>
                                            <Col xs={6} className="offset-1" data-aos="fade-left">
                                                <Col xs={11} className="offset-1">
                                                    <Image src={serviceD.imgUrl} width={serviceD.width} />
                                                </Col>
                                            </Col>
                                        </Row>
                                    ) : (
                                            <Row>
                                                <Col md={6} data-aos="fade-right">
                                                    <Col md={11}>
                                                        <Image src={serviceD.imgUrl} width={serviceD.width} />
                                                    </Col>
                                                </Col>
                                                <Col md={5} className="offset-md-1 mt-5" data-aos="fade-left">
                                                    <div className="mt-5">
                                                        <p className="companyHeadText pt-md-3">{serviceD.title}</p>
                                                        <p className="tileDiscription">{serviceD.text}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        )
                                ))}

                            </Container>
                        ) : (
                            <div>
                                {props.rightImage ? (
                                    <Container fluid>
                                        {props.data.map((serviceD, index) => (
                                            <Row key={index}>
                                                <Col xs={5} data-aos="fade-right">
                                                    <div className="mt-5">
                                                        <p className="companyHeadText pt-md-3 mt-5">{serviceD.title}</p>
                                                        <p className="tileDiscription">{serviceD.text}</p>
                                                    </div>
                                                </Col>
                                                <Col xs={6} className="offset-1" data-aos="fade-left">
                                                    <Col xs={11} className="offset-1">
                                                        <Image src={serviceD.imgUrl} width={serviceD.width} />
                                                    </Col>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Container>
                                ) : (
                                        <Container fluid>
                                            {props.data.map((serviceD, index) => (
                                                <Row>
                                                    <Col md={6} data-aos="fade-right">
                                                        <Col md={11}>
                                                            <Image src={serviceD.imgUrl} width={serviceD.width} />
                                                        </Col>
                                                    </Col>
                                                    <Col md={5} className="offset-md-1 mt-5" data-aos="fade-left">
                                                        <div className="mt-5">
                                                            <p className="companyHeadText pt-md-3">{serviceD.title}</p>
                                                            <p className="tileDiscription">{serviceD.text}</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            ))}
                                        </Container>
                                    )

                                }
                            </div>
                        )}
                </div>
            ) : (
                    <Container fluid>
                        {props.data.map((serviceD, index) => (
                            index % 2 === 0 ? (

                                <Row className="mt-3">
                                    <Col xs={6} data-aos="fade-right">
                                        <div className=" mt-3">
                                            <p className="smallcompanyHeadText pt-md-3 text-center">{serviceD.title}</p>
                                            <p className="text-size text-center">{serviceD.text}</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} className="" data-aos="fade-left">
                                        <Col xs={11} className="offset-1">
                                            <Image src={serviceD.imgUrl} width={serviceD.width} />
                                        </Col>
                                    </Col>
                                </Row>
                            ) : (
                                    <Row className="mt-3 text-center">
                                        <Col md={6} data-aos="fade-right" className="mt-5">
                                            <Col md={11}>
                                                <Image src={serviceD.imgUrl} width={serviceD.width} />
                                            </Col>
                                        </Col>
                                        <Col md={6} className="mt-3" data-aos="fade-left">
                                            <div>
                                                <p className="smallcompanyHeadText">{serviceD.title}</p>
                                                <p className="text-size">{serviceD.text}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                )
                        ))}

                    </Container>
                )}
        </div>
    )
}

export default Scrolling;
