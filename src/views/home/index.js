import React from 'react'
import First from '../../assets/images/home/dynamic/Banner1.png';
import Second from '../../assets/images/home/dynamic/banner2.jpg';
import Third from '../../assets/images/home/dynamic/banner3.jpg';
import Banner from './bannerView';
import Discription from './discriptionView';
import Package from './servicePackage';
import ServicePagesView from './servicePagesView';
import BrandView from './brandCarouselView';
import TeamInfo from './teamInfo';
import BrandTrustUs from './brandTrustUs';
import GetTouchSection from './getInTouch';

const carouselItems = [
    {
        src: First,
        width: '100%'
    },
    {
        src: Second,
        width: '100%'
    },
    {
        src: Third,
        width: '100%'
    }
]

export default function index() {
    return (
        <div className="mt-5 pt-4">
            <Banner carouselItems={carouselItems} />
            <Discription />
            <ServicePagesView />
            <Package />
            <BrandView />
            <TeamInfo />
            <BrandTrustUs/>
            <GetTouchSection/>
        </div>

    )
}
