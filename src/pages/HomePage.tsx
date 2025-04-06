import React, { useState } from "react";
import HomeHeaderBar from "../components/HomeHeaderBar";
import Dropdown from "../components/Dropdown";
import TotoNumbers from "../components/TotoNumbers";
import WinningOutlets from "../components/WinningOutlets";
import WinningEntries from "../components/WinningEntries";

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [mockData, setMockData] = useState<any>(null);

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
    fetchMockData(value);
  };

  // Simulate backend data
  const fetchMockData = (option: string) => {
    const data = {
      past_month: {
        highestFrequency: [1, 2, 3, 4, 5, 6],
        lowestFrequency: [7, 8, 9, 10, 11, 12],
        outlets: { gold: "Outlet A", silver: "Outlet B", bronze: "Outlet C" },
        entries: ["Entry 1", "Entry 2", "Entry 3"],
      },
      past_6_months: {
        highestFrequency: [2, 4, 6, 8, 10, 12],
        lowestFrequency: [1, 3, 5, 7, 9, 11],
        outlets: { gold: "Outlet D", silver: "Outlet E", bronze: "Outlet F" },
        entries: ["Entry 4", "Entry 5", "Entry 6"],
      },
      // Add more mock data for other options...
    };

    setMockData(data[option] || null);
  };

  return (
    <div className="homepage">
      <HomeHeaderBar />
      <h1>TOTO Data Dashboard</h1>
      <Dropdown onChange={handleDropdownChange} />
      {mockData && (
        <>
          <TotoNumbers
            title="TOTO Numbers Drawn with Highest Frequency"
            numbers={mockData.highestFrequency}
          />
          <TotoNumbers
            title="TOTO Numbers Drawn with Lowest Frequency"
            numbers={mockData.lowestFrequency}
          />
          <WinningOutlets outlets={mockData.outlets} />
          <WinningEntries entries={mockData.entries} />
        </>
      )}
    </div>
  );
};

export default HomePage;
