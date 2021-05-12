import React from 'react'
import Carousel from '../../../components/commonComponents/carousel';
import First from '../../../assets/images/about/dynamic/Banner1.png';

const carouselItems=[
    {
        src: First,
        width: '100%'
    }
]

export default function index() {
    return (
        <div className="mt-md-0">
                <div className="mt-md-0 pt-md-0">
                <Carousel
                    carouselItems={carouselItems}
                    interval={100000}
                    indicators={false}
                    controls={false}
                />
                </div>
            </div>
    )
}
