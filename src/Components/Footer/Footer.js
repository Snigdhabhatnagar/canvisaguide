//Footer of the website, visible at the bottom of every page.

import React from "react";
import { Route } from 'react-router-dom';
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";
import Immigration from '../../Container/Immigration/Immigration';
import About from '../../Container/About/Aboutus/About';
import {Modal } from 'react-bootstrap';
import Spouse from '../SpouseSponsor/SpouseSponsor';
import {Button } from 'react-bootstrap';
import Form from '../Form/Form.js';
import ContactUs from '../Contact/Contact';
import Visit from "../../Container/Visit/Visit";
import Study from "../../Container/Study/Study";
import logofull from '../../Assets/logofull.png';
import { SocialIcon } from 'react-social-icons';

class FooterPage extends React.Component {
 constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      showContact: false,
      link:'About',linkedto:'about'
    };
  }
  

  handleShow=()=> {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }
  handleShowContact =() => {
     this.setState({ showContact: true });
  }
handleHideContact =() => {
    this.setState({ showContact: false });
  }

render() {
return (
  <div className="foot">

<Footer className="font-small pt-4 mt-4 ">

  <Container fluid className="text-center text-md-left">
    <Row>
      
      <Col md="4">
      
      <img src={logofull} className="logo"></img>
      <h4 className="title">Can Visa Guide</h4>
     
      <p className="address">

E-mail: canvisaguideinfo@gmail.com<br/>
Call on: +918054466090 <br/>


      </p>
      
      </Col>
      <Col md="4">
      <h5 className="title">Popular Pages</h5>
      <ul className="Footlinks">
        <li className="list-unstyled ">
          <a href="Immigration">Immigration</a>
        </li>
        <li className="list-unstyled">
          <a href="SpouseSponsor">Spouse Sponsership</a>
        </li>
        <li className="list-unstyled">
          <a href="Visit">Visit Visa</a>
        </li>
        <li className="list-unstyled">
          <a href="Study">Study Visa</a>
        </li>
      </ul>
      
      </Col>
      
      <Col md="4">
      
      <h5 className="title">Company Info</h5>
      <ul>
        <li className="list-unstyled">
          <a href={this.state.linkedto}>About Us</a>
        </li>
        <li className="list-unstyled">
          <a onClick={this.handleShowContact}>Contact Us</a>
        </li>
        <li className="list-unstyled">
          <a onClick={this.handleShow}>Free Appraisal</a>
        </li>
       
      </ul>
      
    <br/>
    
    <SocialIcon target="_blank" url="https://instagram.com/canvisaguide?utm_source=ig_profile_share&igshid=17mlgisdk3snm" bgColor="white" style={{ height: 50, width: 50 }} />
     &nbsp;
     &nbsp;<SocialIcon target="_blank" url="https://www.facebook.com/Canvisaguide/" bgColor="white" style={{ height: 50, width: 50 }} />
&nbsp;
     &nbsp;<SocialIcon target="_blank" url="https://www.canvisaguideinfo@gmail.com" bgColor="white" style={{ height: 50, width: 50 }} />
      </Col>
      
    </Row>
    
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.canvisaguide.com"> canvisaguide.com</a>

    </Container>
  </div>
</Footer>
<Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
             <p className="heading text-center mb-10">Free Assessment for Education and Immigration Canada</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
             <Form/>
            </p>
          </Modal.Body>
         
        </Modal>
        <Modal
          {...this.props}
          show={this.state.showContact}
          onHide={this.handleHideContact}
          dialogClassName="custom-modal"
        >
       
          <Modal.Body>
            <p>
             <ContactUs/>
            </p>
          </Modal.Body>
         
        </Modal>


     

</div>
);
}
}

export default FooterPage;