import React, { Component, useState, props } from 'react'
import { Container, Image, Row, Col, Form, Button, Modal, } from 'react-bootstrap';
import Banner from '../../../assets/images/career-img/banner-c.png';
import Schedule from '../../../assets/images/career-img/Vector.svg';
import Mother from '../../../assets/images/career-img/mother.svg';
import Shirt from '../../../assets/images/career-img/shirt.svg';
import Flag from '../../../assets/images/career-img/flag.svg';
import Network from '../../../assets/images/career-img/network.svg';
import Training from '../../../assets/images/career-img/training.svg';
import Calendar from '../../../assets/images/career-img/calendar.svg';

export default function Career() {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       isOpen: false,
    //       isClose:true
    //     };
    //   }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="p-0">
            <div style={{ marginTop: '6%' }}>
                <Image src={Banner} width={'100%'} className="mt-5 mt-sm-0 pt-sm-0" />
            </div>
            {/* banner over  */}
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={show} onHide={handleClose}{...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="body-color" closeButton>
                    <Modal.Title className="body-color w-100"><Row>
                        <Col className="col-8 text-color pt-2"><h1 className="font-mobile-biggerrr">Experience Required</h1></Col>
                        <Col className="col-4 text-color pt-2"><h1 className="font-mobile-biggerrr">2-3 Years</h1></Col>
                    </Row></Modal.Title>
                </Modal.Header>
                <Modal.Body className="body-color"><Form className="pb-2">
                    <Row>
                        <Col className="col-4 col-md-2">      <p className="text-color">Apply For :</p></Col>
                        <Col className="col-8 col-md-10">   <select className="mb-2 text-secondary w-100">
                            <option value="Ford">Content Writer</option>
                            <option value="Volvo">Digital Marketing Expertise</option>
                            <option value="Fiat">Web Designer</option>
                        </select></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Control type='text' placeholder='Enter Your Name' className=" mb-2" />
                        </Col>
                        <Col md={6}>
                            <Form.Control type='email' placeholder='Email Id' />
                        </Col>
                    </Row>
                    <Row className="mt-md-3 mt-2">
                        <Col md={10}>
                            <Form.Control type='number' placeholder="Phone No" />
                        </Col>
                        <Col md={2} className="mt-2 mt-md-0">
                            <Button type="submit" className="homeFormBtnn">
                                Submit
                                        </Button>
                        </Col>
                    </Row>
                </Form></Modal.Body>
            </Modal>
            {/* modal section over */}
            <div className="text-center">
                <h1 className="mt-5 font-weight-bold EqualText">Equal Opportunities & Equal Chances</h1>
                <h1 className="font-weight-bold EqualText">Welcome To The World Of</h1>
                <h1 className="e-text  font-weight-bold EqualText">E-Commerce</h1>
                <hr className="under-line mt-4"></hr>
                <Container>
                    <p className="para pl-md-5 pr-md-5 m-sm-5 text-center">We help our clients to evolve their brand through increasing market
                    reach and growing goodwill.  Our dedicated team helps you bring-up-sell opportunities and keeps a check on your market position.
                    We are looking for dedicated smart talent in our organisation who may serve our clients with respect, ethics, culture and knowledge.
                    We would love to see you join us in our mission to serve the merchant to be among the best service providers around globe.
                    </p>
                </Container>
                {/* welcome section over */}
                <h1 className="serviceHeadText mb-3 ">Open Positions</h1>
                <div className="row col-md-9 mx-auto p-0 mb-5 pos-container">

                    <div className="position-card col-11 col-md-3 mt-3 shadow mx-auto cursor" onClick={handleShow}>
                        <h5 className="p-3 pt-5">Content Writer</h5>
                        <p className="detail">View Details</p>
                    </div>

                    <div className="position-card col-11 col-md-3 mt-3 shadow mx-auto cursor" onClick={handleShow}>
                        <h5 className="p-3 pt-5">Digital Marketing Expertise</h5>
                        <p className="detail">View Details</p>
                    </div>
                    <div className="position-card col-11 col-md-3 mt-3 shadow mx-auto cursor" onClick={handleShow}>
                        <h5 className="pb-3 pt-5">Web Designer</h5>
                        <p className="detail">View Details</p>
                    </div>
                </div>
                {/* open position section over */}
                <h1 className="serviceHeadText mb-3 pt-4">Employee Perks & Benefits</h1>
                <div className="row col-sm-10 mx-auto mb-sm-5">
                    <div className="perk-element-box col-6 col-md-3">
                        <Image src={Schedule} width={'55%'} className="mt-sm-5" />
                        <p className="para mt-3">Flexible Paid Time Off</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3">
                        <Image src={Mother} width={'38.5%'} className="mt-sm-5" />
                        <p className="para mt-3">Paid Parental Leave</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3">
                        <Image src={Shirt} width={'50%'} className="mt-sm-5" />
                        <p className="para mt-3">Casual Dress</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3">
                        <Image src={Flag} width={'50%'} className="mt-sm-5" />
                        <p className="para mt-3">Team Sports & Outing</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3 mx-auto">
                        <Image src={Network} width={'50%'} className="mt-sm-5" />
                        <p className="para mt-3">Referral Program</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3 mx-auto">
                        <Image src={Training} width={'50%'} className="mt-sm-5" />
                        <p className="para mt-3">Workshop For New Joining</p>
                    </div>
                    <div className="perk-element-box col-6 col-md-3 mx-auto">
                        <Image src={Calendar} width={'50%'} className="mt-sm-5" />
                        <p className="para mt-3">Savage Saturdays</p>
                    </div>
                </div>
                <h1 className=" serviceHeadText mb-5 mt-md-5 pt-md-5">Your Resume Must Cover</h1>
            </div>
            <div className="">
                <ul className="row list-req col-10 mx-auto mb-5">
                    <li className="col-sm-8 col-12 pb-sm-5"><span>Tell us why you’re Interested</span></li>
                    <li className="col-sm-4 col-12 pb-sm-5"><span>Write about yourself</span></li>
                    <li className="col-sm-8 col-12 pb-sm-5"><span>Don’t forget to mention your Strength</span></li>
                    <li className="col-sm-4 col-12 pb-sm-5"><span>Must mention yourExtra-curriculars</span></li>
                </ul>
            </div>
            {/* <Modal isOpen={modalIsOpen}>
                <h2>hello tite</h2>
                <p>hello body</p>
            </Modal> */}
        </Container>
    )
}
//function to set visibility
// changeVisibility = () => {
//     this.setState({visibility :"false"});
//   }
// export class CareerForm extends Component {
//     render() {
//         return (
//             <Container className="body-color">
//                 <Row>
//                     <Col className="col-8 text-color pt-2"><h1 className="font-mobile-biggerrr">Experience Required</h1></Col>
//                     <Col className="col-4 text-color pt-2"><h1 className="font-mobile-biggerrr">2-3 Years</h1></Col>
//                 </Row>
//                 <Form className="pb-2">
//                     <Row>
//                         <Col className="col-4 col-md-2">      <p className="text-color">Apply For :</p></Col>
//                         <Col className="col-8 col-md-10">   <select className="mb-2 text-secondary w-100">
//                             <option value="Ford">Content Writer</option>
//                             <option value="Volvo">Digital Marketing Expertise</option>
//                             <option value="Fiat">Web Designer</option>
//                         </select></Col>
//                     </Row>
//                     <Row>
//                         <Col md={6}>
//                             <Form.Control type='text' placeholder='Enter Your Name' className="homeName mb-2" />
//                         </Col>
//                         <Col md={6}>
//                             <Form.Control type='email' placeholder='Email Id' />
//                         </Col>
//                     </Row>
//                     <Row className="mt-md-3 mt-2">
//                         <Col md={10}>
//                             <Form.Control type='number' placeholder="Phone No" />
//                         </Col>
//                         <Col md={2} className="mt-2 mt-md-0">
//                             <Button type="submit" className="homeFormBtnn">
//                                 Submit
//                                         </Button>
//                         </Col>
//                     </Row>
//                 </Form>

//             </Container>
// }
