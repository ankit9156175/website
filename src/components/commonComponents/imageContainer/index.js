import React from 'react'
import {Image} from 'react-bootstrap'
export default function index(props) {
    return (
        <Image src={props.src} width={props.width}/>
    )
}
