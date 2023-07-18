import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const AppLevelContext = React.createContext();

const url = "https://api.themoviedb.org/3/";
const apiKey = "a0dc83f9a4307d4fce7ddaadc76cefd0";

export const AppLevelProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [trends, setTrends] = useState([]);
  const [trendURL, setTrendURL] = useState("all");
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${url}/trending/${trendURL}/day?api_key=${apiKey}`).then((response) => {
      setTrends(response.data.results);
    });
  }, [trendURL]);

  async function handleSetMovieDetail(movieId) {
    setLoading(true);
    await axios.get(`${url}/movie/${movieId}?api_key=${apiKey}`).then((response) => {
      setMovieDetail(response.data);
    });
    setLoading(false);
  }

  function handleSetSearchValue(value) {
    setSearchValue(value);
    if (value !== "") {
      const filteredData = trends.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(trends);
    }
  }

  function handleSetActive(num) {
    setActive(num);
  }

  function handleTrendURL(newUrl) {
    setTrendURL(newUrl);
  }

  return (
    <AppLevelContext.Provider
      value={{
        active,
        setActive,
        handleSetActive,
        handleTrendURL,
        handleSetSearchValue,
        filteredData,
        searchValue,
        trends,
        setTrends,
        movieDetail,
        handleSetMovieDetail,
        loading,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};
