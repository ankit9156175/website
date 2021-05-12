import React from 'react'
import {Carousel} from 'react-bootstrap';
import Image from '../imageContainer';
export default function index(props) {
    return (
       <Carousel controls={props.controls} indicators={props.indicators}>
           {props.carouselItems.map((item, index)=>(
            <Carousel.Item key={index} interval={props.interval}>
                <Image src={item.src} width={item.width} />
            </Carousel.Item>
           ))}
       </Carousel>
    )
}
