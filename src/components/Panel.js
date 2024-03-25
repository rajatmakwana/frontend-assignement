import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import solarIconGreen from "../assets/solar-panel-green-icon.png";
import solarIconRed from "../assets/solar-panel-red-icon.png";

const cardTextStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const iconStyle = { width: "30px" };

const Panel = ({ id, wattage, voltage }) => {
  const isWeak = voltage < 10 && wattage < 200;

  const cardStyle = {
    background: "#f3f3f3",
    borderBottom: "2px solid",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottomColor: isWeak ? "#fa5252" : "#20c997",
  };

  return (
    <Card body className="mr-3" style={cardStyle} data-testid="panel-component">
      <CardTitle tag="h5">Solar Panel ID: {id}</CardTitle>
      <CardText>
        <div style={cardTextStyle}>
          <div>
            <p className="mb-0">
              Wattage: <small className="text-muted">{wattage}</small>
            </p>
            <p className="mb-0">
              Voltage: <small className="text-muted">{voltage}</small>
            </p>
          </div>
          <img
            src={voltage < 10 && wattage < 200 ? solarIconRed : solarIconGreen}
            alt="solar-panel-info"
            style={iconStyle}
          />
        </div>
      </CardText>
    </Card>
  );
};

export default Panel;
