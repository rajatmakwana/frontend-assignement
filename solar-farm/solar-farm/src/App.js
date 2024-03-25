import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import PanelGrid from "./components/PanelGrid";
import Summary from "./components/Summary";
import Header from "./components/Header";

const App = () => {
  const [panels, setPanels] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState(0);

  // get the total energy from all the panel produced by whole farm
  const getTotalEnergy = (data) => {
    const total = data.reduce((total, panel) => {
      const energyValue = parseFloat(
        panel.energy.replace(",", "").replace("kWh", "")
      );
      return total + energyValue;
    }, 0);
    setTotalEnergy(total);
  };

  // get data after each 5 seconds and update the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/");
        setPanels(response.data);
        getTotalEnergy(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app mt-4">
      <Header />
      <Container fluid>
        <Summary panels={panels} totalEnergy={totalEnergy} />
        <PanelGrid panels={panels} />
      </Container>
    </div>
  );
};

export default App;
