import React from 'react'
import LeftRightScroll from '../../../../components/scrollComponent/leftRightScroll';

export default function index(props) {
    return (
        <div>
            <h2 className="serviceHeadText text-center">Connect & Know More About Us</h2>
            <LeftRightScroll leftRight={true} smallText={false} data={props.serviceData}/>
        </div>
    )
}
