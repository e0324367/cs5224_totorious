import React from "react";

interface WinningOutletsProps {
  outlets: { [key: string]: string[] };
}

const WinningOutlets: React.FC<WinningOutletsProps> = ({ outlets }) => {
  const tierToLabel: { [key: string]: string } = {
    gold: "Gold Outlets",
    silver: "Silver Outlets",
    bronze: "Bronze Outlets",
  };

  return (
    <div className="outlet-container">
      {Object.keys(outlets).map((tier, index) => (
        <div key={index} className={`outlet-box ${tier}`}>
          <h3>{tierToLabel[tier]}</h3>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {outlets[tier].map((outlet, idx) => (
              <li key={idx}>{outlet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WinningOutlets;
