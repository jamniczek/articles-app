import { ChangeEvent } from "react";
import "./Select.scss";
interface ISelectProps {
  options: Array<{ value: string; option: string }>;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

export const Select = ({ options, value, onChange, label }: ISelectProps) => {
  return (
    <div className="select__container">
      <p className="select__label">{label}</p>
      <select value={value} onChange={onChange} className="select">
        {options.map(({ value, option }) => (
          <option value={value}>{option}</option>
        ))}
      </select>
    </div>
  );
};
