import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../App";

const Notes = () => {
  const { url, notes, setNotes, currentTime, setCurrentTime } =
    useContext(AppContext);
  const [currentNote, setCurrentNote] = useState("");
  const playerRef = useRef(null);
  const playingTime = Math.floor(currentTime.toFixed(2));

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && currentNote.trim() !== "") {
      setNotes([...notes, `${formatTime(playingTime)} - ${currentNote}`]);
      setCurrentNote("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border p-4 rounded flex flex-col items-center w-[80%]">
        <input
          type="text"
          name="notes"
          id="notes"
          placeholder="press 'Enter' to save the note to current timestamp!"
          className="focus:outline-none w-[70%] h-[150px] rounded-lg p-4"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Notes;
