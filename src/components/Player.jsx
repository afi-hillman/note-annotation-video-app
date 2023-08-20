import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "../App";

const Player = () => {
  const { url, notes, setNotes, currentTime, setCurrentTime } =
    useContext(AppContext);
  const playerRef = useRef(null);

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const playingTime = Math.floor(currentTime.toFixed(2));
  const totalTime = playerRef.current ? playerRef.current.getDuration() : 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center py-6 w-[80%] bg-stone-600 border rounded-md border-white">
        <ReactPlayer
          url={url}
          controls="true"
          ref={playerRef}
          onProgress={handleProgress}
        />
      </div>
      <div className="flex flex-row justify-between items-center w-[80%]">
        <div className="bg-zinc-800 py-2 px-4 rounded-lg my-2">
          <p className="text-white">
            <span className="text-stone-200 font-semibold text-lg">
              {formatTime(playingTime)}
            </span>
            <span className="text-stone-200 text-lg mx-2">/</span>
            <span className="text-stone-200 font-semibold text-lg">
              {formatTime(totalTime)}
            </span>
          </p>
        </div>
        <div>
          <button className="bg-zinc-800 text-gray-200 border border-zinc-700 rounded-lg py-2 px-6 hover:bg-zinc-700 focus:outline-none font-semibold">
            + save note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
