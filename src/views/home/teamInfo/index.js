import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import Naman from '../../../assets/images/home/testimonials/Ellipse 2.png';
import Anshumaan from '../../../assets/images/home/testimonials/Ellipse 1.png';
import Yash from '../../../assets/images/home/testimonials/Ellipse 3.png';
import Sanjaykhanduja from '../../../assets/images/home/testimonials/sanjay.png';
import Prabal from '../../../assets/images/home/testimonials/prabal.png';
import Divya from '../../../assets/images/home/testimonials/divya.png';
const teamInfo = [
    {
        name: 'Naman',
        companyName: 'Grip-X',
        imgUrl: Naman,
        width: '80%',
        text: 'One of the best authorised partner we deal with fast reply anytime you call or msg and polite attitude of everyone who work in company. Also help to know how amazon works which help us to do sale better.'
    },
    {
        name: 'Anshumaan',
        companyName: 'Rudrazone UN',
        imgUrl: Anshumaan,
        width: '80%',
        text: 'Excellent service to grow sales on amazon and flipkart'
    },
    {
        name: 'Yash',
        companyName: 'Indus saffron',
        imgUrl: Yash,
        width: '80%',
        text: 'INDANO E-commerce services gives really good services when it comes to serve customers.Kind of guidance we get is unparallel'
    },
    {
        name: 'Sanjay khanduja',
        companyName: 'Majestic',
        imgUrl: Sanjaykhanduja,
        width: '80%',
        text: 'I have no words to praise their work, as they helped me crack sales of 1crore within 75 working days. Its our honour to work with them.'
    },
    {
        name: 'Prabal sharma',
        companyName: 'App Sale',
        imgUrl: Prabal,
        width: '80%',
        text: 'I am very happy with the service that I am getting . The team is so much responsible and dedicated to their work'
    },
    {
        name: 'Divya',
        companyName: 'Vihaanta furnishing',
        imgUrl: Divya,
        width: '80%',
        text: 'Great experience with Indano. Nice team and dedicated people. Happy to know that my account is in good hands..'
    }
]
export default function index() {
    return (
        <div>
            <div className="d-none d-md-block teamCardContainer">
                <CustomView data={teamInfo}/>
            </div>
            <div className="d-md-none teamCardContainer">
                <MobileView data={teamInfo}/>
            </div>
        </div>
    )
}
