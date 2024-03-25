import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import solarIconGreen from "../assets/solar-panel-green-icon.png";
import solarIconRed from "../assets/solar-panel-red-icon.png";

const Panel = ({ id, wattage, voltage }) => {
  const panelBorderColor = voltage < 10 && wattage < 200 ? "#fa5252" : "#20c997";
  const solarPanelIcon =
    voltage < 10 && wattage < 200 ? solarIconRed : solarIconGreen;

  return (
    <Card
      body
      className="mb-2 shadow"
      style={{
        width: "14rem",
        background: "#f3f3f3",
        borderBottom: "2px solid",
        borderTop: "2px solid gray",
        borderRight: "2px solid gray",
        borderLeft: "2px solid gray",
        borderBottomColor: panelBorderColor
      }}
    >
      <CardTitle tag="h5">Solar Panel ID: {id}</CardTitle>
      <CardText>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p className="mb-0">
              Wattage: <small className="text-muted">{wattage}</small>
            </p>
            <p className="mb-0">
              Voltage: <small className="text-muted">{voltage}</small>
            </p>
          </div>
          <img
            src={solarPanelIcon}
            alt="solar-panel-info"
            style={{ width: "30px" }}
          />
        </div>
      </CardText>
    </Card>
  );
};

export default Panel;
