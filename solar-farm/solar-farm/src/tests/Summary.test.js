import React from "react";
import { render } from "@testing-library/react";
import Summary from "../components/Summary";
import "@testing-library/jest-dom/extend-expect";

describe("Summary component", () => {
  const setup = (panels, totalEnergy) => {
    return render(<Summary panels={panels} totalEnergy={totalEnergy} />);
  };

  test("renders correct total energy", () => {
    const { getByText } = setup([], 1500);

    expect(getByText("Total Energy Produced")).toBeInTheDocument();
    expect(getByText("1.50 mWh")).toBeInTheDocument(); // totalEnergy is greater than 1000, so it should be converted to mWh
  });

  test("renders correct total panels count", () => {
    const panels = [
      { id: 1, wattage: 100, voltage: 10 },
      { id: 2, wattage: 150, voltage: 15 },
    ];
    const { getByText } = setup(panels, 0);
    const totalPanelsElement = getByText("Total Panels").parentNode.querySelector(".card-text");
    expect(totalPanelsElement).toBeInTheDocument();
    expect(totalPanelsElement).toHaveTextContent("2"); // Ensure the text content is "2"
  });
  

  test("renders correct number of healthy panels", () => {
    const panels = [
        { id: 1, wattage: 100, voltage: 10 },
        { id: 2, wattage: 150, voltage: 15 },
        { id: 3, wattage: 200, voltage: 20 },
      ];
      const { getAllByText } =  setup(panels, 0);
      const healthyPanels = getAllByText('Healthy Panels');
      expect(healthyPanels[0]).toBeInTheDocument();
      expect(healthyPanels.length).toBe(1); // Ensure there's only one element with the text "Healthy Panels"
      expect(getAllByText('3')[0]).toBeInTheDocument(); // All panels are considered healthy in this mock data
  });
});
