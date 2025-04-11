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

  const numberToEntry: Record<string, string> = {
    "0": "Ordinary Entry",
    "1": "System 7 Entry",
    "2": "System 8 Entry",
    "3": "System 9 Entry",
    "4": "System 10 Entry",
    "5": "System 11 Entry",
    "6": "System 12 Entry",
    "7": "System Roll Entry",
    "8": "QuickPick Ordinary Entry",
    "9": "QuickPick System 7 Entry",
    "10": "QuickPick System 8 Entry",
    "11": "QuickPick System 9 Entry",
    "12": "QuickPick System 10 Entry",
    "13": "QuickPick System 11 Entry",
    "14": "QuickPick System 12 Entry",
    "15": "QuickPick System Roll Entry",
    "16": "iTOTO",
  };

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
    const apiUrl = `http://13.212.58.159:3000/api/summary?range=${rangeValue}`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          "x-api-key": "8YhW1RrULH8Wk@9aZ!x2qL#Mf$3Vj7Nc",
        },
      });
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
      <div className="container-fluid">
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
            <WinningOutlets outlets={data.top_outlets} />
            <WinningEntries
              entries={[
                {
                  label: "Gold Entry Type",
                  entries: data.top_entry_types.first.map(
                    (e: string) => numberToEntry[e]
                  ),
                },
                {
                  label: "Silver Entry Type",
                  entries: data.top_entry_types.second.map(
                    (e: string) => numberToEntry[e]
                  ),
                },
                {
                  label: "Bronze Entry Type",
                  entries: data.top_entry_types.third.map(
                    (e: string) => numberToEntry[e]
                  ),
                },
              ]}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
