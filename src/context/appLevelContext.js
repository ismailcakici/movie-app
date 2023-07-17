import React from "react";
import { useState } from "react";

//https://api.themoviedb.org/3/movie/157336?api_key=a0dc83f9a4307d4fce7ddaadc76cefd0 => one movie
//https://api.themoviedb.org/3/trending/all/day?api_key=a0dc83f9a4307d4fce7ddaadc76cefd0 => trendings
// api key => a0dc83f9a4307d4fce7ddaadc76cefd0
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg => image
export const AppLevelContext = React.createContext();

export const AppLevelProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  function handleSetActive(num) {
    setActive(num);
  }

  return (
    <AppLevelContext.Provider value={{ active, setActive, handleSetActive }}>
      {children}
    </AppLevelContext.Provider>
  );
};
