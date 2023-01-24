import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp, { useCountUp } from "react-countup";
import "./HackathonOverview.css";
import HackOverflowStrokeAnimation from "./HackOverflowStrokeAnimation";
const HackathonOverview = (props) => {
  const [show,setShow]=useState(false)
  
  
  return (
    <Container>
        {/* <HackOverflowStrokeAnimation/> */}
        <Row >
          <Col lg={2} onScroll={()=>{console.log('scrolled')}} >
            <CountUp start={0} end={1} duration={2.75} suffix="Lakh+" enableScrollSpy="true" />
            <p>Prize Pool</p>
            
          </Col>
          <Col lg={2}>
            <CountUp start={0} end={500} duration={2.75} suffix="+" enableScrollSpy="true"/>
            <p>Participants</p>
          </Col>
          <Col lg={2}>
            <CountUp start={0} end={50} duration={2.75} suffix="+" enableScrollSpy="true"/>
            <p>Teams</p>
          </Col>
        </Row>
        
    </Container>
  );
};

export default HackathonOverview;
