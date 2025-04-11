import React from "react";

interface EntryGroup {
  label: string;
  entries: string[];
}

interface WinningEntriesProps {
  entries: EntryGroup[];
}

const WinningEntries: React.FC<WinningEntriesProps> = ({ entries }) => {
  const getColorClass = (label: string) => {
    switch (label.toLowerCase()) {
      case "gold entry type":
        return "gold";
      case "silver entry type":
        return "silver";
      case "bronze entry type":
        return "bronze";
      default:
        return "";
    }
  };

  return (
    <div className="entries-container">
      {entries.map((group, index) => (
        <div key={index} className={`entry-box ${getColorClass(group.label)}`}>
          <h2>{group.label}</h2>
          <ul>
            {group.entries.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WinningEntries;
