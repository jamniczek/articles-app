import { useCallback, useContext } from "react";

import "./Articles.scss";

import { Card } from "../Card/Card";
import { AppContext } from "../../context/AppContext";
import { useFetch } from "../../hooks/useFetch";
import { Filters } from "../Filters/Filters";

export const Articles = () => {
  const { country, pageSize, articles } = useContext(AppContext);

  const { error } = useFetch();

  const countriesMap = {
    pl: "Polska",
    de: "Niemcy",
    cz: "Czechy",
  };

  const renderArticles = useCallback(() => {
    const col1 = articles.filter((e, index) => index % 2 === 0);
    const col2 = articles.filter((e, index) => index % 2 !== 0);
    return col1.map((e, index) => (
      <div className="row">
        <div className="column">{col1[index] && <Card {...col1[index]} />}</div>
        <div className="column">{col2[index] && <Card {...col2[index]} />}</div>
      </div>
    ));
  }, [articles]);

  return (
    <div className="app">
      <h3>{`Wyświetlono ${pageSize} artykułów dla kraju ${countriesMap[country]}`}</h3>
      <Filters />

      {error ? (
        <p>Error occured </p>
      ) : (
        <div className="cards-container">{renderArticles()}</div>
      )}
    </div>
  );
};
