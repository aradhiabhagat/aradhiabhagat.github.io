import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import Image from 'next/image'; // Import Image component from Next.js

const GithubProfileCard = ({ avatar_url, bio, location = "Madison, WI" }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <div className="p-4">
          <Row className="align-items-center justify-content-center">
            <Col lg="4" className="text-center">
              <div className="image-container mb-4">
                <Image
                  src={avatar_url}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                />
              </div>
              <h2 className="text-white">Contact Me!</h2>
              <p className="lead text-white mt-3">Get in Touch!</p>
              <p className="text-white mt-3">{bio}</p>
              <SocialLinks />
            </Col>
            <Col lg="8" className="text-center">
              <div className="embed-responsive embed-responsive-16by9 my-3">
                <iframe
                  title="Google Map"
                  className="embed-responsive-item"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC-sV1Xz8-fiThhJKKc0GLXHZvmwFUTrzI&q=Madison,WI&zoom=12`}
                  allowFullScreen
                  style={{ border: 0, borderRadius: '10px' }}
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
