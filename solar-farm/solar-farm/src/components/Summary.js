import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import totalEnergyIcon from "../assets/energy-icon.png";
import solarPanelBlue from "../assets/solar-panel-blue-icon.png";
import solarPanelRed from "../assets/solar-panel-red-icon.png";
import solarPanelGreen from "../assets/solar-panel-green-icon.png"

const widthStyle = { width: 50 };

const Summary = ({ panels, totalEnergy }) => {
  // Get the list of weak and healthy panels
  const weakPanels =
    panels.filter((panel) => panel.voltage < 10 && panel.wattage < 200) ?? 0;
  const healthyPanels = panels.length - weakPanels.length ?? 0;

  // Convert to mWh if total energy is greater than 1000 kWh
  const formattedTotalEnergy =
    totalEnergy > 1000
      ? (totalEnergy / 1000).toFixed(2) + " mWh"
      : totalEnergy.toFixed(2) + " kWh" ?? "0 kWh";

  return (
    <div className="mt-4 mb-4">
      <section className="park-overview bg-primary p-2 rounded-lg shadow">
        <h3 className="text-white mb-2">Park Overview</h3>
        <Row className="justify-content-center">
          
          {/* Total Energy Card */}
          <Col sm="6" lg="3" className="mb-2">
            <Card className="rounded-lg shadow p-1">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="card-title mb-0">Total Energy Produced</h6>
                  <p className="card-text mb-0">{formattedTotalEnergy}</p>
                </div>
                <img
                  src={totalEnergyIcon}
                  alt="total-energy"
                  style={widthStyle}
                />
              </CardBody>
            </Card>
          </Col>

          {/* Total Panels Card */}
          <Col sm="6" lg="3" className="mb-2">
            <Card className="rounded-lg shadow p-1">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="card-title mb-0">Total Panels</h6>
                  <p className="card-text mb-0">{panels.length}</p>
                </div>
                <img
                  src={solarPanelBlue}
                  alt="total-panel"
                  style={widthStyle}
                />
              </CardBody>
            </Card>
          </Col>

          {/* Healthy Panels Card */}
          <Col sm="6" lg="3" className="mb-2">
            <Card className="rounded-lg shadow p-1">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="card-title mb-0">Healthy Panels</h6>
                  <p className="card-text mb-0">{healthyPanels}</p>
                </div>
                <img
                  src={solarPanelGreen}
                  alt="total-healthy-panel"
                  style={widthStyle}
                />
              </CardBody>
            </Card>
          </Col>

          {/* Weak Panels Card */}
          <Col sm="6" lg="3" className="mb-2">
            <Card className="rounded-lg shadow p-1">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="card-title mb-0">Weak Panels</h6>
                  <p className="card-text mb-0">{weakPanels.length}</p>
                </div>
                <img
                  src={solarPanelRed}
                  alt="total-weak-panel"
                  style={widthStyle}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Summary;
