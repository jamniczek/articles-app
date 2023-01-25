import {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface IArticle {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
}

interface IAppContextDefault {
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  articles: IArticle[];
  setArticles: Dispatch<SetStateAction<IArticle[]>>;
}

const AppContext = createContext<IAppContextDefault>({
  pageSize: "10",
  setPageSize: () => {},
  country: "pl",
  setCountry: () => {},
  articles: [],
  setArticles: () => {},
});

function ContextProvider({ children }) {
  const [country, setCountry] = useState<string>("pl");
  const [pageSize, setPageSize] = useState<string>("10");
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const countryLS = JSON.parse(localStorage.getItem("country"));
    const pageSizeLS = JSON.parse(localStorage.getItem("pageSize"));
    console.log({ countryLS, pageSizeLS });
    if (countryLS) {
      setCountry(countryLS);
    }
    if (pageSizeLS) {
      setPageSize(pageSizeLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(country));
    localStorage.setItem("pageSize", JSON.stringify(pageSize));
  }, [country, pageSize]);

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        pageSize,
        setPageSize,
        articles,
        setArticles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { ContextProvider, AppContext };
