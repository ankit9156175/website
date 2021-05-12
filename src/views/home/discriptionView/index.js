import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView'

export default function index() {
    return (
        <div className="mt-5">
            <div className="d-none d-md-block">
                <CustomView />
            </div>
            <div className="d-md-none">
                <MobileView />
            </div>
        </div>
    )
}
