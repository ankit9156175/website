import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel';
import Image from '../../../../components/commonComponents/imageContainer';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

export default function index(props) {
    return (
        <div className="pt-2">
            <Container className=" mb-5">
                <Row className="">
                    <Carousel breakPoints={breakPoints} pagination={false} style={{ height: '150%' }}
                        className="styling-example"
                        enableAutoPlay={true} autoPlaySpeed={2000}>
                        {props.data.map((data, index) => (
                            <Col className="mx-auto padding" key={index}>
                                <Card className="pt-md-5 teamCard">
                                    <Card.Title className="positioning">
                                        <Image src={data.imgUrl} width={data.width} />
                                    </Card.Title>
                                    <Card.Body className="bodyMargin">
                                        <Card.Text>
                                            <p className="teamSubHead font-mobile-bigger mt-0">{data.name}</p>
                                            <p className="teamSubHead font-mobile-bigger textUp">{data.companyName}</p>
                                            <p className="teamDiscription font-mobile-text">{data.text}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Carousel>
                </Row>
            </Container>
        </div>
    )
}
