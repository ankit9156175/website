import React from 'react'
import BannerView from './BannerView';
import DiscriptionView from './discriptionView';
import DetailView from './detailView';
import PartnerView from './partnerView';
import GetInTouch from '../home/getInTouch';
export default function index() {
    return (
        <div>
            <BannerView />
            <DiscriptionView />
            <DetailView />
            <PartnerView />
            <GetInTouch />
        </div>
    )
}
