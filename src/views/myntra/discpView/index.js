import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import First from '../../../assets/images/myntra/1.png';
import Second from '../../../assets/images/myntra/2.png';
import Third from '../../../assets/images/myntra/3.png';

const discpData = [
    {
        title: 'Quality check',
        text: 'Product samples are sent to the Myntra head office for quality check process',
        imgUrl: First,
        width: '80%'
    },
    {
        title: 'Training',
        text: 'Get training on everything, how selling on Myntra works, day to day operations, how to check your orders, how to manage your amazon account and so on.',
        imgUrl: Second,
        width: '70%'
    },
    {
        title: 'Listing and Catalog',
        text: 'Minimum of 150 SKU’s should be there with trademark. Once the products are approved from Myntra. The listing, cataloging and photo-shoot is done according to Myntra guidelines.',
        imgUrl: Third,
        width: '100%'
    }
]
export default function index() {
    return (
        <div className="mt-5">
            <div className="d-none d-md-block mb-5">
                <CustomView data={discpData}/>
            </div>
            <div className="d-md-none">
                <MobileView data={discpData}/>
            </div>
        </div>
    )
}
