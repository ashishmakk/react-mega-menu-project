import React, { useRef } from "react";
import { useGlobalContext } from "./Context";
import data from "./data";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = data.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const { clientX, clientY } = event;

    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
        }}
      >
        {currentPage?.links?.map((item) => {
          return (
            <div className='submenu-cell'>
              <img src={item.img} alt='image' className='submenu-img' />
              <a key={item.id} className='submenu-link'>
                {item.icon}
                {item.label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
