import React from 'react'
import BottomUpScroll from '../../../../components/scrollComponent/bottomUpScroll';
export default function index(props) {
    return (
        <div>
            <BottomUpScroll data={props.data} />
        </div>
    )
}
