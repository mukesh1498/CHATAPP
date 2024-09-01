import React from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MessageContainer from "../../components/Message/Messagecontainer.jsx";
const Home = () => {
  return (
    <div
      className="flex  w-[900px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
  backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
