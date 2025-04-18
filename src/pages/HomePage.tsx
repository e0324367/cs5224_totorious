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
  const [sigmaNumbers, setSigmaNumbers] = useState<number[] | null>(null);
  const [randomNumbers, setRandomNumbers] = useState<number[] | null>(null);

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
    const sigmaUrl = `http://13.212.58.159:3000/api/sigma-numbers?range=${rangeValue}`;
    const randomUrl = `http://13.212.58.159:3000/api/random-numbers`;

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
      console.error("Error fetching main data:", error);
    } finally {
      setGetting(false);
    }

    try {
      const sigmaResponse = await fetch(sigmaUrl, {
        headers: {
          "x-api-key": "8YhW1RrULH8Wk@9aZ!x2qL#Mf$3Vj7Nc",
          Origin: "http://test-origin.com",
        },
      });

      if (!sigmaResponse.ok) throw new Error("Failed to fetch sigma numbers");
      const sigmaData = await sigmaResponse.json();
      setSigmaNumbers(sigmaData.numbers);
    } catch (error) {
      console.error("Error fetching sigma numbers:", error);
    }

    try {
      const response = await fetch(randomUrl, {
        headers: {
          "x-api-key": "8YhW1RrULH8Wk@9aZ!x2qL#Mf$3Vj7Nc",
          Origin: "http://test-origin.com",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setRandomNumbers(result.numbers);
    } catch (error) {
      console.error("Error fetching random numbers:", error);
    }
  }

  return (
    <div className="homepage">
      <HomeHeaderBar />
      <div className="container-fluid">
        <h1>TOTORious Visualisation & Data Analytics Dashboard</h1>
        <Dropdown onChange={handleDropdownChange} />
        {getting && <p>Fetching data...</p>}
        {data && (
          <>
            <div
              className="message-block"
              style={{
                marginTop: "2rem",
                fontStyle: "italic",
                color: "#007bff",
              }}
            >
              <p>
                Consider below if you FOMO! Everyone is buying these numbers,
                don't let me miss out!
              </p>
            </div>
            <TotoNumbers
              title="📈TOTO Numbers Drawn with Highest Frequency📈"
              numbers={data.most_frequent_numbers}
            />
            <div
              className="message-block"
              style={{
                marginTop: "2rem",
                fontStyle: "italic",
                color: "#28a745",
              }}
            >
              <p>
                Nah, I don't follow the crowd, let me trot the path less taken
              </p>
            </div>
            <TotoNumbers
              title="📉TOTO Numbers Drawn with Lowest Frequency📉"
              numbers={data.least_frequent_numbers}
            />
            <h2
              style={{
                marginTop: "3rem",
                color: "#dc3545",
                textAlign: "center",
              }}
            >
              🏪Top Winning Ticket Outlets🏪
            </h2>
            <WinningOutlets
              outlets={{
                gold: data.top_outlets.first,
                silver: data.top_outlets.second,
                bronze: data.top_outlets.third,
              }}
            />
            <h2
              style={{
                marginTop: "3rem",
                color: "#dc3545",
                textAlign: "center",
              }}
            >
              🎫Top Winning Entry Types🎫
            </h2>
            <WinningEntries entries={data.top_entry_types} />
          </>
        )}
        {sigmaNumbers && (
          <>
            <div
              className="message-block"
              style={{
                marginTop: "2rem",
                fontStyle: "italic",
                color: "#007bff",
              }}
            >
              <p>Hmm... how about getting some numbers through 𝓂𝒶𝓉𝒽?</p>
            </div>
            <TotoNumbers title="✨Sigma Numbers✨" numbers={sigmaNumbers} />
          </>
        )}
        {randomNumbers && (
          <>
            <div
              className="message-block"
              style={{
                marginTop: "2rem",
                fontStyle: "italic",
                color: "#28a745",
              }}
            >
              <p>Let me leave it up to fate!</p>
            </div>
            <TotoNumbers
              title="🎲Completely Random Numbers🎲"
              numbers={randomNumbers}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
