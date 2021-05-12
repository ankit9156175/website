import React from 'react'
import {Container} from 'react-bootstrap'
import Carousel from 'react-elastic-carousel';
import Item from './item';
import Image from '../imageContainer'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

export default function index(props) {
    return (
        <Container>
            <div className="carouView">
                <Carousel breakPoints={breakPoints} pagination={false}
                    // showArrows={false}
                    autoPlaySpeed={3000}
                className="styling-example">
                    {props.data.map((data, index)=>(
                        <Item key={index}>
                            <Image src={data.imgUrl} width={data.width} />
                        </Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    )
}
