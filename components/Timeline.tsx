import React from "react";
import { educationDeets as educationInfo, experienceInfo } from "../portfolio";
import { Education, Experience } from "../types/Portfolio";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-hat-3 text-info" /> {/* Use an appropriate icon */}
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Education</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center mb-5">
            {educationInfo.map((edu: Education, index: number) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">
                  📅 {edu.date} {/* Add the calendar emoji here */}
                </div>
                <div className="timeline-content">
                  <h3>{edu.schoolName}</h3>
                  <h4>{edu.degree}</h4>
                  {edu.coursework && <p>Coursework: {edu.coursework.join(", ")}</p>}
                  {edu.activities && <p>Activities: {edu.activities.join(", ")}</p>}
                </div>
              </div>
            ))}
          </Row>
        </Container>

        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" /> {/* Use an appropriate icon */}
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Work Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center mb-5">
            {experienceInfo.map((exp: Experience, index: number) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">
                  📅 {exp.date} {/* Add the calendar emoji here */}
                </div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Timeline;
