import React from 'react';

interface WinningOutletsProps {
  outlets: { [key: string]: string };
}

const WinningOutlets: React.FC<WinningOutletsProps> = ({ outlets }) => {
  return (
    <div className="outlet-container">
      {Object.keys(outlets).map((tier, index) => (
        <div key={index} className={`outlet-box ${tier}`}>
          <h2>{tier.charAt(0).toUpperCase() + tier.slice(1)} Outlet</h2>
          <p>{outlets[tier]}</p>
        </div>
      ))}
    </div>
  );
};

export default WinningOutlets;