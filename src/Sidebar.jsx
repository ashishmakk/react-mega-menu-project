import React from "react";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import data from "./data";
import { nanoid } from "nanoid";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}>
      <div className='sidebar-container'>
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {data.map((item) => {
            console.log(item);
            const { page, pageId, links } = item;

            return (
              <article key={pageId}>
                <h5>{page}</h5>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { id, label, icon } = link;
                    return (
                      <a href='#' key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
