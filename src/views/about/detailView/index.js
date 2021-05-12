import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import First from '../../../assets/images/about/service/Frame.png';
import Second from '../../../assets/images/about/service/Frame2.png';
import Third from '../../../assets/images/about/service/Frame1.png'

const serviceData = [
    {
        title: 'OUR VISION – YOUR GROWTH',
        text: 'Well, our Vision is to grow your business. No matter, In which category you are pursuing your business or from where you are handling your business. We are always there to handle your queries and resolve them on time. We have specialized team of dedicated executives who keep a keen eye on your account and reports your Account Manager with every change in your account.',
        imgUrl: First,
        width: '100%',
    },
    {
        title: 'DEDICATED ACCOUNT MANAGER',
        text: 'We serve our clients with dedicated Account managers, who’ll serve you with best services needed for your Account. Their guidance will guide you towards better Product and Brand visibility. Our customers get 24*7 calling support and get their queries resolved within hours. We believe to bring results and always focus on creating brand visibility for your brand. Our campaigns and promotions bring your product in the eyes of customer.',
        imgUrl: Second,
        width: '80%',
    },
    {
        title: 'GUARANTEE SERVICES',
        text: 'We just launched our latest Guarantee services for those who seeks fast and effective growth in there respective businesses. If we won’t be able to give your work on time then your work will be done Free of Cost.',
        imgUrl: Third,
        width: '80%',
    }
]
export default function index() {
    return (
        <div>
            <div className="d-none d-md-block mt-5"  style={{overflowX: 'hidden'}}>
                <CustomView serviceData={serviceData} />
            </div>
            <div className="d-md-none mt-5">
                <MobileView serviceData={serviceData} />
            </div>
        </div>
    )
}
