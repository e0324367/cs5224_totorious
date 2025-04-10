import React, { useState } from "react";
import HomeHeaderBar from "../components/HomeHeaderBar";
import Dropdown from "../components/Dropdown";
import TotoNumbers from "../components/TotoNumbers";
import WinningOutlets from "../components/WinningOutlets";
import WinningEntries from "../components/WinningEntries";

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [getting, setGetting] = useState<boolean>(false);

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
    fetchData(value);
  };
  async function fetchData(selectedOption: string) {
    setGetting(true);

    const rangeMap: Record<string, string> = {
      past_3_months: "3m",
      past_6_months: "6m",
      past_year: "1y",
      past_till_2014: "all",
    };

    const rangeValue = rangeMap[selectedOption];
    const apiUrl = `http://47.128.65.231:3000/api/summary?range=${rangeValue}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setGetting(false);
    }
  }

  return (
    <div className="homepage">
      <HomeHeaderBar />
      <h1>TOTO Data Dashboard</h1>
      <Dropdown onChange={handleDropdownChange} />
      {getting && <p>Fetching data...</p>}
      {data && (
        <>
          <TotoNumbers
            title="TOTO Numbers Drawn with Highest Frequency"
            numbers={data.most_frequent_numbers}
          />
          <TotoNumbers
            title="TOTO Numbers Drawn with Lowest Frequency"
            numbers={data.least_frequent_numbers}
          />
          <WinningOutlets
            outlets={{
              gold: data.top_outlets.first,
              silver: data.top_outlets.second,
              bronze: data.top_outlets.third,
            }}
          />
          <WinningEntries
            entries={[
              data.top_entry_types.first,
              data.top_entry_types.second,
              data.top_entry_types.third,
            ]}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
