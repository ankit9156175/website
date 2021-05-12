import React from 'react'
import {Container} from 'react-bootstrap';
import StyledCarousel from '../../../../components/commonComponents/styledCarousel';
export default function index(props) {
    return (
        <div className="mt-5 mb-5 brandContainer">
            <Container className="pt-4 text-center">
                <h1 className="serviceHeadText mb-4">Brand That Trust Us</h1>
                <StyledCarousel data={props.data} />
                <p style={{height: '40px'}}></p>
            </Container>
        </div>
    )
}
