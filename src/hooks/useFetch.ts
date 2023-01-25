import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

export const useFetch = () => {
  const { country, pageSize, setArticles } = useContext(AppContext);

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          apiKey: process.env.API_KEY,
          country,
          pageSize,
        },
      });
      setArticles(res.data.articles);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [country, pageSize]);

  return { response, error, loading };
};
