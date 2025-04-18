import React from "react";

interface WinningEntriesProps {
  entries: { [key: string]: string[] };
}

const WinningEntries: React.FC<WinningEntriesProps> = ({ entries }) => {
  const tiers = ["first", "second", "third"];

  const tierToColor: Record<string, string> = {
    first: "gold",
    second: "silver",
    third: "bronze",
  };

  const tierToLabel: Record<string, string> = {
    first: "Gold Entry Types",
    second: "Silver Entry Types",
    third: "Bronze Entry Types",
  };

  return (
    <div className="entries-container">
      {tiers.map((tier) => {
        const tierEntries = entries[tier] ?? [];

        return (
          <div key={tier} className={`entry-box ${tierToColor[tier]}`}>
            <h3>{tierToLabel[tier]}</h3>
            {tierEntries.length > 0 ? (
              <ul>
                {tierEntries.map((entry, idx) => (
                  <li key={idx}>{entry}</li>
                ))}
              </ul>
            ) : (
              <p>No entries available.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WinningEntries;
