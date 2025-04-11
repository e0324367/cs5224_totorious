import React from "react";

interface WinningOutletsProps {
  outlets: {
    first: string[];
    second: string[];
    third: string[];
  };
}

const WinningOutlets: React.FC<WinningOutletsProps> = ({ outlets }) => {
  const tierMap: { [key: string]: string[] } = {
    gold: outlets.first ?? [],
    silver: outlets.second ?? [],
    bronze: outlets.third ?? [],
  };

  return (
    <div className="outlet-container">
      {Object.entries(tierMap).map(([tier, outletList]) => (
        <div key={tier} className={`outlet-box ${tier}`}>
          <h2>{tier.charAt(0).toUpperCase() + tier.slice(1)} Outlet</h2>
          <ul>
            {outletList.map((outlet, index) => (
              <li key={index}>{outlet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WinningOutlets;
