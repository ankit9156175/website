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
            <Container className="col-9">
                <Row className="pb-5">
                    <Carousel breakPoints={breakPoints} pagination={false} style={{height: '500px'}} enableAutoPlay={true} autoPlaySpeed={2000}
                    className="styling-example"
                    >
                        {props.data.map((data, index) => (
                            <Col className="mx-auto mt-5" key={index}>
                                <Card className="mt-md-5 teamCard heigt">
                                    <Card.Title className="positioning">
                                        <Image src={data.imgUrl} width={data.width} />
                                    </Card.Title>
                                    <Card.Body className="bodyMargin">
                                        <Card.Text>
                                            <p className="teamSubHead">{data.name}</p>
                                            <p className="teamSubHead textUp">{data.companyName}</p>
                                            <p className="teamDiscription">{data.text}</p>
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
