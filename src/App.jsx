import React, { createContext, useState } from "react";
import Home from "./pages/Home";

export const AppContext = createContext(null);

const App = () => {
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState([]);
  const [showDrawer, setShowDrawer] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <AppContext.Provider
      value={{
        url,
        setUrl,
        notes,
        setNotes,
        showDrawer,
        setShowDrawer,
        currentTime,
        setCurrentTime,
      }}
    >
      <Home />
    </AppContext.Provider>
  );
};

AppContext.displayName = "AppContext";
export default App;
