import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import Acc from '../../../assets/images/flipkart-img/Acc.png'
import Prod from '../../../assets/images/flipkart-img/prod.png'
import Pro from '../../../assets/images/flipkart-img/pro.png'
import Daily from '../../../assets/images/flipkart-img/daily.png'
import Full from '../../../assets/images/flipkart-img/fullAcc.png'
import Train from '../../../assets/images/flipkart-img/train.png'
import Flip from '../../../assets/images/flipkart-img/flip.png'

export default function index() {
    return (
        <Container style={{ marginTop: '30%' }}>
            <Container className="text-center">
                <h1 className="serviceHeadText font-mobile-extra-bigger text-center mb-5">Flipkart</h1>
                <Row>
                    <Col className="col-6">
                        <Image src={Acc} width={'80%'} />
                        <h4>Account Registration</h4>
                    </Col>
                    <Col className="col-6">
                        <Image src={Prod} width={'60%'} />
                        <h4>Product Listing</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="col-6">
                        <Image src={Pro} width={'70%'} />
                        <h4>Promotion & Marketing</h4>
                    </Col>
                    <Col className="col-6">
                        <Image src={Daily} width={'60%'} />
                        <h4>Daily Updation</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="col-6">
                        <Image src={Full} width={'70%'} />
                        <h4>Full Account Management Services</h4>
                    </Col>
                    <Col className="col-6">
                        <Image src={Train} width={'60%'} />
                        <h4>Training</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="col-6 offset-3">
                        <Image src={Flip} width={'70%'} />
                        <h4>Flipkart assured</h4>
                    </Col>
                </Row>
            </Container>
            {/* images section ends */}
            <h2 className="text-light-org mt-5 font-weight-bold">Account Registration</h2>
            <p className="mb-0 mt-3">For Flipkart account registration we need certain documents along with few more information.</p>
            <p className="mb-0">Documents needed for Flipkart account registration:-</p>
            <ul>
                <li>PAN card</li>
                <li>GSTIN number (mandatory)</li>
                <li>Bank account</li>
            </ul>
            <p>After filling all the needed information, click 'Register with Flipkart' now we are successfully registered with Flipkart.</p>
            {/* account registration secton ends */}
            <h2 className="text-light-org  font-weight-bold mt-5 mb-3">Product Listing & Cataloging</h2>
            <p className="mb-0">After completing the registration process we need to list our products on Flipkart portal.</p>
            <p>There are 2 ways of Listing:-</p>
            <p className="font-weight-bold">Single Listing</p>
            <p>We create new product listing and do it manually by adding it em or creating a separate list for each item if each one has different category.</p>
            <p className="font-weight-bold">Bulk listing</p>
            <p>Here, we create bulk listing for products and make their variations (if you are dealing in a particular product).</p>
            <p className="mb-2">points to remember for effective listing</p>
            <ul>
                <li>Product title</li>
                <li>SEO friendly content</li>

                <li>Description</li>
                <li>Image editing</li>


                <li>Image</li>
                <li>Bullet points</li>
            </ul>
            {/* product and listing section ends */}
            <h2 className="text-light-org  font-weight-bold mt-5 mb-3">Promotion & Marketing</h2>
            <p>We market your products and promote it through various tools, software and expertise skills for more traffic.This eventually helps us to create visibility for your products. Product visibility makes it easy for buyer to find your products and you are on track to win great sales.</p>
            {/* promotion Marketing section ends */}
            <h2 className="text-light-org  font-weight-bold mt-5 mb-3">Daily Updation</h2>
            <p className="mb-2">Daily updation on your Flipkart account means regular checking and updation of keyword, pricing, promotions etc.</p>
            <p>This keeps your account health at <span className="font-weight-bold font-italic">‘Excellent’</span>.</p>
            {/* daily updation section ends 
             */}
            <h2 className="text-light-org  font-weight-bold mt-5 mb-3">Flipkart Assured</h2>
            <p className="mb-2">Flipkart boost services includes an account manager, who will work on different aspects of your account like repricing, deals, promotion, account health management, everyday operations etc.</p>
            <p>Benefits of Boost Services</p>
            <Row>
                <Col className="col-6">
                    <ul>
                        <li>Increase customer reach</li>
                        <li>Brand awareness and product awareness</li>
                        <li>Target potential customer</li>
                        <li>Cost effective</li>
                        <li>See fast results</li>
                    </ul>
                </Col>
            </Row>
            <p>Our account managers optimize your advertisements and manage campaign for effective and efficient results.</p>
            {/* flipkart assured section ends */}
            <h2 className="text-light-org  font-weight-bold mb-2">Training</h2>
            <p className="mb-5">Get training on everything, how selling on Flipkart works, day to day operations, how to check your orders, how to manage your amazon account and so on.</p>
            {/* training section ends */}
        </Container>
    )
}
