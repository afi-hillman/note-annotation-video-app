import { Link } from "lucide-react";
import React, { useContext } from "react";
import { AppContext } from "../App";

const Header = () => {
  const { setUrl } = useContext(AppContext);
  const { showDrawer, setShowDrawer } = useContext(AppContext);
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <header className="h-[60px] w-full flex justify-between items-center px-[180px] bg-zinc-800">
      <div className="flex flex-row gap-2">
        <img
          className="w-12 bg-white rounded-xl p-1"
          src="src\assets\logo.png"
          alt="logo"
        />
        <h3 className="text-2xl font-bold text-white underline py-1">noted!</h3>
      </div>
      <div>
        <div className="border bg-zinc-700 p-2 rounded flex items-center gap-2 w-[420px]">
          <Link color="#5e5e5e" />
          <input
            type="text"
            name="videoUrl"
            id="videoUrl"
            placeholder="Insert a video url to get started"
            className="focus:outline-none bg-zinc-700 text-white w-full"
            onChange={(e) => handleUrlChange(e)}
          />
        </div>
      </div>

      <button
        className="bg-zinc-800 text-gray-200 border border-zinc-700 rounded-lg py-3 px-6 hover:bg-zinc-700 focus:outline-none font-semibold"
        onClick={handleDrawerToggle}
      >
        .notes drawer
      </button>
    </header>
  );
};

export default Header;
