import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import AccountReg from '../../../assets/images/flipkart-img/Group1.svg';
import Traning from '../../../assets/images/flipkart-img/Group2.svg';



export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <h1 className="serviceHeadText font-mobile-biggerr mb-5 pb-5">Flipkart</h1>
            <Row>
                <Col className="col-7">
                    <Image src={AccountReg} width={'80%'} />
                </Col>
                <Col className="col-5">
                    <Image src={Traning} width={'80%'}/>
                </Col>
            </Row>
            <h2 className="text-light-org mt-5 pt-4 font-weight-bold mb-3">Account Registration</h2>
            <p className="mb-0 mt-3 text-size">For Flipkart account registration we need certain documents along with few more information.</p>
            <p className="mb-0 text-size">Documents needed for Flipkart account registration:-</p>
            <ul className="text-size">
                <li>PAN card</li>
                <li>GSTIN number (mandatory)</li>
                <li>Bank account</li>
            </ul>
            <p className="text-size">After filling all the needed information, click 'Register with Flipkart' now we are successfully registered with Flipkart.</p>
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Product Listing & Cataloging</h2>
            <p className="mb-0 text-size">After completing the registration process we need to list our products on Flipkart portal.</p>
            <p className=" text-size">There are 2 ways of Listing:-</p>
            <p className="font-weight-bold text-size">Single Listing</p>
            <p className=" text-size">We create new product listing and do it manually by adding it em or creating a separate list for each item if each one has different category.</p>
            <p className="font-weight-bold text-size">Bulk listing</p>
            <p className=" text-size">Here, we create bulk listing for products and make their variations (if you are dealing in a particular product).</p>
            <p className="mb-2 text-size">points to remember for effective listing</p>
            <Row>
            <Col className="col-4 text-size">
                <ul>
                    <li>Product title</li>
                    <li>SEO friendly content</li>
                    </ul>
                </Col>
                <Col className="col-4 text-size">
                    <ul>
                    <li>Description</li>
                    <li>Image editing</li>
                    </ul>
                </Col>
                <Col className="col-4 mb-4 text-size">
                    <ul>
                    <li>Image</li>
                    <li>Bullet points</li>
                    </ul>
                </Col>
                
            </Row>
            <h2 className="text-light-org  font-weight-bold mb-3 mt-4">Promotion & Marketing</h2>
            <p className=" text-size">We market your products and promote it through various tools, software and expertise skills for more traffic.This eventually helps us to create visibility for your products. Product visibility makes it easy for buyer to find your products and you are on track to win great sales.</p>
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Daily Updation</h2>
            <p className="mb-2 text-size">Daily updation on your Flipkart account means regular checking and updation of keyword, pricing, promotions etc.</p>
            <p className=" text-size">This keeps your account health at <span className="font-weight-bold font-italic">‘Excellent’</span>.</p>
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Flipkart Assured</h2>
            <p className="mb-2 text-size">Flipkart boost services includes an account manager, who will work on different aspects of your account like repricing, deals, promotion, account health management, everyday operations etc.</p>
            <p className=" text-size">Benefits of Boost Services</p>
            <Row>
                <Col className="col-6 text-size">
                <ul>
                <li>Increase customer reach</li>
                <li>Brand awareness and product awareness</li>
                <li>Target potential customer</li>
            </ul>
                </Col>
                <Col className="col-6 text-size">
                    <ul>
                        <li>Cost effective</li>
                        <li>See fast results</li>
                    </ul>
                </Col>
            </Row>
            <p className=" text-size">Our account managers optimize your advertisements and manage campaign for effective and efficient results.</p>
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Training</h2>
            <p className="mb-5 text-size">Get training on everything, how selling on Flipkart works, day to day operations, how to check your orders, how to manage your amazon account and so on.</p>
    </Container>
    )
}
