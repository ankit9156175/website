import React, { Component } from 'react'
import Carousel from '../../../components/commonComponents/carousel';

export default class index extends Component {
    render() {
        return (
            <div className="mt-sm-4 mt-md-0">
                <Carousel
                    carouselItems={this.props.carouselItems}
                    interval={1000}
                    indicators={false}
                    controls={false}
                />
            </div>
        )
    }
}
