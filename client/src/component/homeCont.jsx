import React, { useEffect} from "react";
import {Container,Row,Col,Button} from "reactstrap";
import HomeCard from "./homeCard";
import logo from "./img/logo.png";
import "./css/home.css";
import {CgProfile} from "react-icons/cg";

const HomeContainer =() => {
    return (
      <div className="home-main">
       <div className="side-bar-fixed">
         Welcome to CDC IIT(ISM)<br/>
         <img src={logo} alt="logo" className="logo-side"/>
         <Row className="mb-3 mt-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Internship</Row>
         <Row>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Job</Row>
         <Row></Row>
         <Row className="mb-3 mt-5">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jobs Offered
         </Row>
         <Row>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internship Offered
         </Row>
         </div>
         <Container fluid>
         <Row className="">
          <Col className="d-flex flex-row-reverse profile-icon mt-3 px-4">
           <CgProfile className="profile-icon"/>
          </Col>
         </Row>
         <Row className="common-margin">
           All Jobs Offered by Company
         </Row>
      <Row className="mt-5">
        <Col>
        <HomeCard/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
        <HomeCard/>
        </Col>
      </Row>
      </Container>
      </div>
    );
  }

export default HomeContainer;