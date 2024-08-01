import React from "react";
import { Card, CardBody } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard: React.FC<EducationType> = ({ schoolName, subHeader, date: string, desc, grade, descBullets }) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{schoolName}</h5>
            <h6>{subHeader}</h6>
            <p>{desc}</p>
            {grade && <p>Grade: {grade}</p>}
            {descBullets ? (
              <ul>
                {descBullets.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
