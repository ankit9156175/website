import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';

const textData = [
    {
        title: 'Effective Listing',
        subText: ['Product title', 'Bullet points', 'Description', 'SEO friendly content', 'Image', 'Image editing'],
        titleTwo: 'Hurray! You are On boarded',
        text: 'After all the process is completed your products will go live on the myntra portal. Now, you are onboard and ready to hit the market.',
    }
]
export default function index() {
    return (
        <div className="mt-md-5 pt-3 backColor">
            <div className="mt-5 d-none d-md-block">
                <CustomView data={textData}/>
            </div>
            <div className="mt-5 d-md-none">
                <MobileView data={textData}/>
            </div>
        </div>
    )
}
