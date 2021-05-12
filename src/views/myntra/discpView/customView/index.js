import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import LeftRightScroll from '../../../../components/scrollComponent/leftRightScroll';
export default function index(props) {
    return (
        <Container style={{overflowX: 'hidden'}}>
            <LeftRightScroll leftRight={true} smallText={false} data={props.data} />
        </Container>
    )
}
