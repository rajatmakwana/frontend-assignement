import React from "react";
import Logo from "../assets/logo.png";
import { Row, Col } from "reactstrap";

export default function Header() {
  return (
    <Row className="justify-content-center align-items-center">
      <Col className="col-auto">
        <img src={Logo} alt="Logo" style={{ width: 50 }} />
      </Col>
      <Col className="col-auto">
        <h2>Solar Panel Monitoring Dashboard</h2>
      </Col>
    </Row>
  );
}
