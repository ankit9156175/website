import React from 'react'
import {Container} from 'react-bootstrap';
import DiscpView from './discpView';
import TextView from './textView';
export default function index() {
    return (
        <div className="mt-5">
            <Container className="d-none d-md-block pt-5">
                <h2 className="discpHead mt-2">Myntra</h2>
                <h3 className="companySubHeadText font-size mt-5">Onboarding</h3>
            </Container>
            <div className="d-md-none pt-3">
                <h2 className="discpHead text-center font-mobile-extra-bigger mt-3">Myntra</h2>
                <h3 className="companySubHeadText text-center mt-3">Onboarding</h3>
            </div>
            <DiscpView />
            <TextView />
        </div>
    )
}
