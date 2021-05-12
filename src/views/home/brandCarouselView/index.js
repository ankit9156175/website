import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import First from '../../../assets/images/home/brand-trust-us/Group1.png';
import Second from '../../../assets/images/home/brand-trust-us/Group2.png';
import Third from '../../../assets/images/home/brand-trust-us/Group3.png';
import Fourth from '../../../assets/images/home/brand-trust-us/Group4.png';
import Fifth from '../../../assets/images/home/brand-trust-us/Group5.png';
import Sixth from '../../../assets/images/home/brand-trust-us/Group6.png';
import Seventh from '../../../assets/images/home/brand-trust-us/Group7.png';
import Eight from '../../../assets/images/home/brand-trust-us/Group8.png';
import Nineth from '../../../assets/images/home/brand-trust-us/Group9.png';
const brandData = [
    {
        imgUrl : First,
        width : '100%' 
    },
    {
        imgUrl : Second,
        width : '100%' 
    },
    {
        imgUrl : Third,
        width : '100%' 
    },
    {
        imgUrl : Fourth,
        width : '100%' 
    },
    {
        imgUrl : Fifth,
        width : '100%' 
    },
    {
        imgUrl : Sixth,
        width : '100%' 
    },
    {
        imgUrl : Seventh,
        width : '100%' 
    },
    {
        imgUrl : Eight,
        width : '100%' 
    },
    {
        imgUrl : Nineth,
        width : '100%' 
    }
]
export default function index() {
    return (
        <div>
            <div className="d-none d-md-block brandContainer">
                <CustomView data={brandData}/>
            </div>
            <div className="d-md-none brandContainer">
                <MobileView data={brandData}/>
            </div>
        </div>
    )
}
