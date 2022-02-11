import React, { useEffect} from "react";
import {Container,Row,Col} from "reactstrap";
import {BsFillEyeFill} from "react-icons/bs";
import logo from "./img/logo.png";
import "./css/home.css";

const HomeCard =() => {
    return (
      <>
      <Container className="home-card ml-2">
          <Row>
              <Col>Software Development Intern</Col>
              <Col className="d-flex justify-content-center d-flex align-items-center">2 month</Col>
              <Col className="d-flex justify-content-center d-flex align-items-center">2023 batch</Col>
              <Col className="d-flex justify-content-center d-flex align-items-center">Open</Col>
              <Col className="d-flex justify-content-center d-flex align-items-center"><BsFillEyeFill/></Col>
          </Row>
      </Container>
      </>
    );
  }

export default HomeCard;