import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../portfolio";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    skillsSection && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Container className="text-center my-5 section section-lg skills-container">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5 justify-content-center" key={index}>
                <Col lg="8">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      const skillId = `skill-${index}-${i}`;
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skillId}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" />
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skillId}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </motion.div>
    )
  );
};

export default Skills;
