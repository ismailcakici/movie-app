import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

//https://api.themoviedb.org/3/movie/157336?api_key=a0dc83f9a4307d4fce7ddaadc76cefd0 => one movie
export const AppLevelContext = React.createContext();

const url = "https://api.themoviedb.org/3/";
const apiKey = "a0dc83f9a4307d4fce7ddaadc76cefd0";

export const AppLevelProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends();
  }, []);

  async function fetchTrends() {
    const response = await axios.get(`${url}/trending/all/day?api_key=${apiKey}`);
    const trends = response.data.results;
    setTrends(trends);
  }

  function handleSetActive(num) {
    setActive(num);
  }

  return (
    <AppLevelContext.Provider
      value={{ active, setActive, handleSetActive, trends, setTrends, fetchTrends }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};
