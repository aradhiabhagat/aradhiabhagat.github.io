import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";
import Image from 'next/image'; // Import Image component from Next.js
import headShot from "../public/src/headshot.png";
import { Typewriter } from 'react-simple-typewriter';

const Greetings = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, []);

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            {/* Gradient Background */}
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row className="align-items-center"> {/* Align items center */}
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    <div className="typewriter-text">
                      <Typewriter
                        words={['Aradhia Bhagat', 'UW-Madison Student', 'Software Engineer']}
                        loop={1}  // Loop set to 1 to ensure it runs once
                        cursor={showCursor}
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={() => setShowCursor(false)} // Hide cursor when typing is done
                      />
                    </div>
                  </h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">📄</span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6" className="image-container">
                  <Image
                    src={headShot}
                    alt="Your Description"
                    width={250} // Increase the size of the image
                    height={250} // Increase the size of the image
                    className="rounded-circle"
                  />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
