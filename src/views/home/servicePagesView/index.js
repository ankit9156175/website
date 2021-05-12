import React from 'react'
import {Container} from 'react-bootstrap'
import CustomView from './customView'
import MobileView from './mobileView'
import Amazon from '../../../assets/images/home/discription/a.png';
import Flipkart from '../../../assets/images/home/discription/b.png';
import Myntra from '../../../assets/images/home/discription/c.png';
import Ajio from '../../../assets/images/home/discription/d.png';
import Tata from '../../../assets/images/home/discription/e.png';

export default function index() {

    const aboutData = [
        {
            title: 'Amazon',
            text: 'Amazon aims to give A to Z services as its current logo depict a smile that goes from A to Z. This signifies that the company is willing to deliver everything to everyone, anywhere in the world.Amazon bring the E-Commerce globally and introduced itself as global E-commerce Giant.',
            imgUrl: Amazon,
            width: '100%',
            link: '/amazon'
        },
        {
            title: 'Flipkart',
            text: 'From a moderate beginning in 2007 to become the largest E-commerce platform in India, Flipkart came a long way through firm determination and more than ordinary skills of Team. Flipkart has also strengthened its operations and network by acquiring various platforms such as Myntra, Jabong, PhonePe etc.',
            imgUrl: Flipkart,
            width: '120%',
            link: '/flipkart'
        },
        {
            title: 'Myntra',
            text: 'Myntra is one of the biggest E-Commerce Platform for fashion and clothing. Myntra was acquired by India’s largest marketplace Flipkart in 2004. Myntra was valued at $300 Millions and was claimed to be one of the largest in History.',
            imgUrl: Myntra,
            width: '100%',
            link: '/myntra'
        },
        {
            title: 'Ajio',
            text: 'AJIO is the digital fashion extension of Reliance. Ajio, a fashion and lifestyle brand, is Reliance Retails’s first Pan-Indian E-Commerce venture and is the ultimate fashion destination for style that are hand picked.',
            imgUrl: Ajio,
            width: '100%',
            link: '/ajio'
        },
        {
            title: 'Tata Cliq',
            text: 'Tata Group, the 150-year-old salt-to-software Conglomerate. It entered online retail only a year ago with its E-Commerce portal Tatacliq, after careful consideration of scale and costs. Tatacliq has done a few things differently from other marketplaces and worked horizontally as well as vertically.',
            imgUrl: Tata,
            width: '100%',
            link: '/tatacliq'
        }
    ]


    return (
        <div className="mt-5" style={{overflowX:'hidden'}}>
            <Container className="d-none d-md-block">
                <CustomView serviceData={aboutData}/>
            </Container>
            <Container className="d-md-none">
                <MobileView serviceData={aboutData}/>
            </Container>
        </div>
    )
}
