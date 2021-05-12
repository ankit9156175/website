import React from 'react'
import BottomUpScroll from '../../../../components/scrollComponent/bottomUpScroll'

export default function index(props) {
    return (
        <div>
            <h2 className="serviceHeadText font-mobile-extra-bigger text-center">Connect & Know More About Us</h2>
            <BottomUpScroll data={props.serviceData} />
        </div>
    )
}
