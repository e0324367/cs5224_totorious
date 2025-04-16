import React from 'react';

interface WinningEntriesProps {
  entries: string[];
}

const WinningEntries: React.FC<WinningEntriesProps> = ({ entries }) => {
  return (
    <div className="entries-container">
      <h2>Top Winning Ticket Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default WinningEntries;
