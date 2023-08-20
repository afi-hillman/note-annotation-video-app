import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ReactPlayer from "react-player";
import { AppContext } from "../App";
import Notes from "../components/Notes";
import Player from "../components/Player";
import Drawer from "../components/Drawer";

const Home = () => {
  const { url, notes, setNotes, showDrawer, setShowDrawer } =
    useContext(AppContext);
  const playerRef = useRef(null);
  const [currentNote, setCurrentNote] = useState("");

  // const saveNoteButtonPress = () => {
  //   setNotes([...notes, currentNote]);
  //   setCurrentNote("");
  // };
  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="w-screen min-h-screen bg-black/90">
      <Header />
      <Drawer
        toggleDrawer={handleDrawerToggle}
        slideIn={showDrawer ? 0 : -25}
      />
      <div
        className={`main-content transition-margin-right duration-200 ${
          showDrawer ? "mr-[25%]" : "mr-0"
        }`}
      >
        <Player />
        <Notes />
      </div>
    </div>
  );
};

export default Home;
