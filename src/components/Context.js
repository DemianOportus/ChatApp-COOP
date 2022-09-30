import { useState, createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const [mode, setMode] = useState("light");

  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
        mode,
        setMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
