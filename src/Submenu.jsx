import React from "react";
import { useGlobalContext } from "./Context";
import data from "./data";

function Submenu() {
  const { pageId } = useGlobalContext();

  const currentPage = data.find((item) => item.pageId === pageId);
  console.log(currentPage);

  return (
    <div className={pageId ? "submenu show-submenu" : "submenu"}>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((item) => {
          return (
            <a key={item.id} className='submenu-btn'>
              {item.icon}
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
