import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../App";

const Drawer = ({ slideIn, toggleDrawer }) => {
  const { notes, setNotes, setCurrentTime, playerRef } = useContext(AppContext);
  const drawerStyles = {
    position: "fixed",
    bottom: 0,
    right: slideIn + "%",
    backgroundColor: "white",
    height: "calc(100% - 60px)",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    paddingLeft: "10px",
    zIndex: 10,
    transition: `right 0.2s ease-in-out`,
    maxHeight: "100%",
    overflowY: "auto",
  };
  const reversedNotes = [...notes].reverse();

  const formatTimeInSeconds = (timeInMinutes) => {
    return timeInMinutes * 60;
  };
  const handleNoteClick = (timestamp) => {
    // const timestamp = playerRef.current._reactInternals.actualDuration;
    // console.log(timestamp);
    // console.log(playerRef.current.seekTo(timestamp));
    // console.log(formatTimeInSeconds(timestamp));
  };
  return (
    <div
      style={drawerStyles}
      className="transition-transform duration-200 transform"
    >
      <div className="flex flex-col gap-6 w-full p-4">
        <div>
          {reversedNotes.map((note, index) => {
            return (
              <div
                className="bg-amber-200 mx-auto mt-6 w-full p-4 hover:cursor-pointer hover:p-6 transition-all hover:bg-amber-200/60 rounded-br-[14px]"
                key={index}
                onClick={(timestamp) => handleNoteClick(timestamp)}
              >
                <p>{note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

<></>;
export default Drawer;
