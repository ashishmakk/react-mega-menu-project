import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
