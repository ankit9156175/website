import React, { useEffect } from 'react'
import Aos from 'aos';
import { Row, Col, Container } from 'react-bootstrap';
import Image from '../../commonComponents/imageContainer';


const BottomUpScroll = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <Container className="mt-5">
            <div>
                {props.imageOnly ? (
                    <div>
                        <Row>
                        {props.imageData.map((data, index) => (
                            <Col xs={4} key={index} data-aos="fade-up">
                                <Image src={data.imgUrl} width={data.width} />
                            </Col>
                        ))}
                        </Row>
                    </div>
                ) : (
                        <div>
                            {props.data.map((data, index) => (
                                <Row key={index} className="mt-5">
                                    <Col xs={12} data-aos="fade-up">
                                        <h4 className="companyHeadTextMobile">{data.title}</h4>
                                    </Col>
                                    <Col xs={12} className="mt-1" data-aos="fade-up"><Image src={data.imgUrl} width={data.width} /></Col>
                                    <Col xs={12} data-aos="fade-up"><p className="tileDiscriptionMobile">{data.text}</p></Col>
                                </Row>
                            ))}
                        </div>
                    )}
            </div>
        </Container>
    )
}

export default BottomUpScroll;