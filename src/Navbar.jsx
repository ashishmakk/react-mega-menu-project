import React from "react";
import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("navlink")) {
      setPageId(null);
    }
  };

  return (
    <section className='navbar' onMouseOver={handleSubmenu}>
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
