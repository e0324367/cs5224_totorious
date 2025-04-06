import React from 'react';

interface TotoNumbersProps {
  title: string;
  numbers: number[];
}

const TotoNumbers: React.FC<TotoNumbersProps> = ({ title, numbers }) => {
  return (
    <div className="toto-box">
      <h2>{title}</h2>
      <div className="circle-container">
        {numbers.map((num, index) => (
          <div key={index} className="circle">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotoNumbers;