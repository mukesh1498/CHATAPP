import React from "react";
import SearchInput from "../SearchInput.jsx/SearchInput";
import Conversations from "../Conversations/Conversations";
import LogoutButton from "../LogoutButton/LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="divider px-3"></div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

// STARTER CODE SNIPPET
// import React from "react";
// import SearchInput from "../SearchInput.jsx/SearchInput";
// import Conversations from "../Conversations/Conversations";

// const Sidebar = () => {
//   return (
//     <div>
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// };

// export default Sidebar;
