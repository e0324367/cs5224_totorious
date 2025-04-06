// src/components/Dropdown.tsx
import React from 'react';
import Select from 'react-select';

interface DropdownProps {
  onChange: (value: string) => void;
}

const options = [
  { value: 'past_month', label: 'Display Results Based on Past Month Data' },
  { value: 'past_6_months', label: 'Display Results Based on Past 6 Months Data' },
  { value: 'past_year', label: 'Display Results Based on Past Year Data' },
  { value: 'past_till_2014', label: 'Display Results Based on Past Data till 2014' }
];

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  return (
    <Select
      options={options}
      onChange={(selectedOption: any) => onChange(selectedOption.value)}
      placeholder="Select Time Period"
    />
  );
};

export default Dropdown;