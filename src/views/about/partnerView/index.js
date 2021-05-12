import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import First from '../../../assets/images/home/partner/flipkartLogo.png';
import Second from '../../../assets/images/home/partner/amazonLogo.png';

const partnerData = [
    {
        imgUrl: Second,
        width: '80%'
    },
    {
        imgUrl: First,
        width: '100%'
    }
]
export default function index() {
    return (
        <div>
            <div className="d-none d-md-block">
                <CustomView data={partnerData}/>
            </div>
            <div className="d-md-none">
                <MobileView data={partnerData}/>
            </div>
        </div>
    )
}
