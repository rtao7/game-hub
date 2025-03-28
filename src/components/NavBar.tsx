import React from "react";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <div className="flex items-center gap-2 text-black">
      <img src="/logo.webp" alt="Logo" className="w-12" />
      <SearchInput />
      Navbar
    </div>
  );
};

export default NavBar;
