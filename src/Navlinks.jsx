import React from "react";
import data from "./data";
import { useGlobalContext } from "./Context";

function Navlinks() {
  const { setPageId } = useGlobalContext();

  return (
    <section className='navlinks-container'>
      {data.map((item) => {
        
        return (
          <button
            key={item.pageId}
            className='navlinks-btn'
            onMouseEnter={() => setPageId(item.pageId)}
          >
            {item.page}
          </button>
        );
      })}
    </section>
  );
}

export default Navlinks;
