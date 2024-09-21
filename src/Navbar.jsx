import React from "react";
import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";

function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <section className='navbar'>
      <div className='navbar-container'>
        <h1 className='logo'>MEGAMENU</h1>
        <button type='button' onClick={openSidebar} className='btn'>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </section>
  );
}

export default Navbar;
