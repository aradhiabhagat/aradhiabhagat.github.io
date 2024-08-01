import React from "react";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Container className="section section-lg">
      <div className="d-flex p-4">
        <h1 className="display-3">Education</h1>
      </div>
      {educationInfo.map((edu, index) => (
        <Row className="row-grid align-items-center mb-5" key={index}>
          <Col lg="6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className="mb-0">{edu.schoolName}</h4>
              <p>{edu.subHeader}</p>
              <p>{edu.duration}</p>
              {edu.desc && <p className="text-muted">{edu.desc}</p>}
              {edu.descBullets && (
                <ul>
                  {edu.descBullets.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Education;
