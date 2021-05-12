import React from 'react'
import {Container} from 'react-bootstrap';
import BottomUpScroll from '../../../../components/scrollComponent/bottomUpScroll';
export default function index(props) {
    return (
        <div>
             <Container className="pt-4 text-center">
                <h1 className="serviceHeadText font-mobile-bigger mb-4">Brand That Trust Us</h1>
                <BottomUpScroll imageData={props.data} imageOnly={true}/>
                <p style={{height: '40px'}}></p>
            </Container>
        </div>
    )
}
