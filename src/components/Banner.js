import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-illustration.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import Typewriter from 'typewriter-effect';

export const Banner = () => {


  const Slogan = () => {
    return (
      // eslint-disable-next-line
      <span className={'slogan sloganBeginning'} role="text">
        <h1 className={'sloganBeginning'}>
          HackOverflow 1.0
          <h2 className="animatedtext text-[#8D1F97] text-[2rem]">
          &nbsp;
            <span className={'typewriterPlaceholder'}><TypewriterWelcome /></span>
          </h2>
        </h1>
      </span>
    );

  };

  const TypewriterWelcome = () => {
    const [displayPlaceholder, setDisplayPlaceholder] = useState(true);
    const strings = [
      'Save the date 16th March 2023.',
      'Compete with the best.',
      'Register today on Devfolio.',
      'Explore Different Themes.',

    ];
    const typewriterInit = (typewriter) => {
      if (displayPlaceholder) {
        setDisplayPlaceholder(false);
      }
      const typeString = (string, pauseTime) => {
        typewriter.typeString(string).pauseFor(pauseTime).deleteAll(30);
      };
      for (const string of strings) {
        typeString(string, 2500);
      }
      typewriter.start();
    };
    return (
      <>
        {displayPlaceholder && (
          <span className={'typewriterPlaceholder'}>inspiration.</span>
        )}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 30,
            deleteSpeed: 30,
          }}
          onInit={(typewriter) => typewriterInit(typewriter)}
        />
      </>
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <Slogan />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Register
                  </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
