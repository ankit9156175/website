import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Acc from '../../../assets/images/amazon-img/Acc.png';
import Fba from '../../../assets/images/amazon-img/fba.png';
import Prod from '../../../assets/images/amazon-img/prod.png';
import FullAcc from '../../../assets/images/amazon-img/fullAcc.png';
import Pro from '../../../assets/images/amazon-img/pro.png';
import Ar from '../../../assets/images/amazon-img/ar.png';
import Daily from '../../../assets/images/amazon-img/daily.png';
import Bs from '../../../assets/images/amazon-img/bs.png';
import Abs from '../../../assets/images/amazon-img/abs.png';
export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <h1 className="serviceHeadText font-mobile-biggerr mb-5">Amazon.in</h1>
            <Container>
                <Row>
                    <Col className="col-2">
                    <Image src={Acc} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold text-size">Account Registration</Col>
                    <Col className="col-2">
                    <Image src={Fba} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">FBA Services</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-2">
                    <Image src={Prod} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">Product Listing</Col>
                    <Col className="col-2">
                    <Image src={FullAcc} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">Full Account Management Services</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-2">
                    <Image src={Pro} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">Promotion and Marketing </Col>
                    <Col className="col-2">
                    <Image src={Ar} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">Account Reinstatement</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-2">
                    <Image src={Daily} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold  text-size">Daily Updation</Col>
                    <Col className="col-2">
                    <Image src={Bs} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold text-size">Brand Store creation with A+ Content</Col>
                </Row>
                <Row className="mt-3 mb-5">
                    <Col className="col-2">
                    <Image src={Abs} width={'70%'} />
                    </Col>
                    <Col className="col-4 mt-4 font-weight-bold text-size">Amazon Boost Services</Col>
                </Row>
                {/* images section ends */}
                <h2 className="text-light-org mt-5 mb-3 font-weight-bold">Account Registration</h2>
                <p className=" text-size">For amazon account registration we need certain documents along with few more information. Documents needed for amazon account registration:-</p>
                <ul className=" text-size">
                    <li>PAN card</li>
                    <li>GSTIN number (mandatory)</li>
                    <li>Bank account</li>
                </ul>
                <p className=" text-size">After filling all the needed information, click ‘Register with Amazon’ and now we are successfully registered with Amazon. </p>
                {/* account registration section ends */}
                <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Product Listing & Cataloging</h2>
            <p className="mb-0 text-size">After completing the registration process we need to list our products on Amazon portal.</p>
            <p className=" text-size">There are 2 ways of Listing:-</p>
            <p className="font-weight-bold text-size">Single Listing</p>
            <p className=" text-size">We create new product listing and do it manually by adding it em or creating a separate list for each item if each one has different category.</p>
            <p className="font-weight-bold text-size">Bulk listing</p>
            <p className=" text-size">Here, we create bulk listing for products and make their variations (if you are dealing in a particular product).</p>
            <p className="mb-2 text-size">points to remember for effective listing</p>
            <Row>
            <Col className="col-4  text-size">
                <ul>
                    <li>Product title</li>
                    <li>SEO friendly content</li>
                    </ul>
                </Col>
                <Col className="col-4  text-size">
                    <ul>
                    <li>Description</li>
                    <li>Image editing</li>
                    </ul>
                </Col>
                <Col className="col-4 mb-4  text-size">
                    <ul>
                    <li>Image</li>
                    <li>Bullet points</li>
                    </ul>
                </Col>
                
            </Row>
            {/* product listing section ends */}
            <h2 className="text-light-org  font-weight-bold mb-3 mt-3">Promotion & Marketing</h2>
            <p className=" text-size">We market your products and promote it through various tools, software and expertise skills for more traffic.This eventually helps us to create visibility for your products. Product visibility makes it easy for buyer to find your products and you are on track to win great sales.</p>
            {/* promotion ends here */}
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Daily Updation</h2>
            <p className="mb-2 text-size">Daily updation on your Flipkart account means regular checking and updation of keyword, pricing, promotions etc.</p>
            <p className=" text-size">This keeps your account health at <span className="font-weight-bold font-italic">‘Excellent’</span>.</p>
            {/* daily updation ends */}
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">Amazon Boost Services</h2>
            <p className=" text-size">Amazon boost services includes an account manager, who will work on different aspects of your account like repricing, deals, promotion, account health management, everyday operations etc.</p>
            <p className=" text-size">Benefits of Boost Services</p> 
            <Row>
                <Col className="col-6  text-size">
                    <ul>
                        <li>Increase customer reach</li>
                        <li>Brand awareness and product awareness</li>
                        <li>Target potential customer</li>
                    </ul>
                </Col>
                <Col className="col-6  text-size">
                    <ul>
                        <li>Cost effective</li>
                        <li>See fast results</li>
                    </ul>
                </Col>
            </Row>
            <p className=" text-size">Our account managers optimize your advertisements and manage campaign for effective and
efficient results.</p>
{/* amazon boost services ends */}
<h2 className="text-light-org  font-weight-bold mb-3 mt-5">Brand store creation  with A+ content</h2>
<p className=" text-size">Amazon give special space to sellers for showcasing of products in more effective way. Amazon A+ content isn’t accessible to all the sellers. The program is only approved after getting brand store approval from Amazon.</p>
<p className=" text-size">A+ content starts by understanding your customer’s barrier, then we can develop a strategy to overcome these barriers in your marketing content.</p>
<p className=" text-size">Benefits of adding A+ content</p>
<ul className=" text-size">
    <li>Increase conversions</li>
    <li>Increase sales</li>
    <li>Encourage repeat purchase</li>
    <li>Reduce customer return</li>
</ul>
{/* brand store section ends */}
<h2 className="text-light-org  font-weight-bold mb-3 mt-5">Account Reinstatement</h2>
            <p className=" text-size">There are many windows of reinstatement, get your account reinstated, our team of experts will help you create an effective appeal with a plan of action.</p>
            <p className=" text-size">Reasons of sellers account suspension:-</p>
            <ul className=" text-size">
                <li> Failure to address intellectual property complaints</li>
                <li> Operating multiple amazon seller account</li>
                <li>Amazon seller account hacker</li>
                <li> Sale of restricted product</li>
                <li> Inauthentic complaint</li>
                <li> Using images/ text without permission- copyright infringement</li>
                <li>Amazon seller accused of unauthorized sales</li>
                <li>Manipulating amzon customer review</li>
            </ul>
            {/* account reinstatement ends */}
            <h2 className="text-light-org  font-weight-bold mb-3 mt-5">FBA Services (Transportation)</h2>
            <p className=" text-size">FBA helps third party seller grow by giving them access to amazon’s world class fulfillment resources and expertise, acclaimed customer services and trusted shipping options. Fulfillment By Amazon (FBA) helps you increase your online sales by giving you access to amazon’s world class fulfillment resources.
With Fulfillment By Amazon(FBA) you store your products in Amazon’s warehouse and deliver the order to customers directly through Amazon’s warehouse.
</p>
<p className=" text-size">Benefits of using FBA:-</p>
<Row>
    <Col className="col-6">
        <ul className=" text-size">
            <li>Focus on business</li>
            <li>Prime delivery increases product demand</li>
            <li>Pay as you go</li>
            <li>Build trust</li>
        </ul>
    </Col>
    <Col className="col-6">
    <ul className=" text-size">
        <li>Pay on delivery payments</li>
        <li>Customers keep coming back for more</li>
        <li>No growing pain</li>
    </ul>
    </Col>
</Row>
<h2 className="text-light-org  font-weight-bold mb-3 mt-5">Training</h2>
<p className="mb-5 text-size">Get training on everything, how selling on amazon works, day to day operations, how to check your orders, how to manage your amazon account and so on.</p>
            
            </Container>
        </Container>
    )
}
