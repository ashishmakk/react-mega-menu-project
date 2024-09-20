import React from "react";
import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "./Context";

function Navbar() {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <section className='nav-container'>
      <div className='navbar'>
        <h1 className='logo'>MEGAMENU</h1>
        <button type='button' onClick={isSidebarOpen} className='btn'>
          <FaBars />
        </button>
      </div>
    </section>
  );
}

export default Navbar;
