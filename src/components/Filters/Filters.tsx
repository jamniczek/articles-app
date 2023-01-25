import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Select } from "../Select/Select";
import "./Filters.scss";

const countriesOptions = [
  { option: "Polska", value: "pl" },
  { option: "Czechy", value: "cz" },
  { option: "Niemcy", value: "de" },
];

const resultCountOptions = [
  { option: "10", value: "10" },
  { option: "20", value: "20" },
  { option: "50", value: "50" },
  { option: "100", value: "100" },
];

export const Filters = () => {
  const { country, setCountry, pageSize, setPageSize, articles } =
    useContext(AppContext);
  return (
    <div className="filters__container">
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countriesOptions}
        label="Kraj"
      />

      <Select
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
        options={resultCountOptions}
        label="Liczba atukułów"
      />
    </div>
  );
};
