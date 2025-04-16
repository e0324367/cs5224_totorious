// src/components/Dropdown.tsx
import React from "react";
import Select from "react-select";

interface DropdownProps {
  onChange: (value: string) => void;
}

const options = [
  {
    value: "past_3_months",
    label: "Past 3 Months Data",
  },
  {
    value: "past_6_months",
    label: "Past 6 Months Data",
  },
  { value: "past_year", label: "Past Year Data" },
  {
    value: "past_till_2014",
    label: "Past Data till 2014",
  },
];

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  return (
    <Select
      options={options}
      onChange={(selectedOption: any) => onChange(selectedOption.value)}
      placeholder="TOTORious, show me what numbers to buy based on:"
    />
  );
};

export default Dropdown;
