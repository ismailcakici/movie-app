import React from "react";
import { useState } from "react";

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
