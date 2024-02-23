import React from "react";
import { smoothScroll } from "../../utility/smoothScroll";
import { useNavigate } from "react-router-dom";

const HeaderOptions = (item, showMenu, homeHeader) => {
  const Navigate = useNavigate();

  const redirectHome = (item) => {
    if (homeHeader && item === "Home") {
      Navigate("/");
    }
    console.log(item);
  };

  return (
    <ul
      className={`header-items flex justify-between items-center md:gap-8 uppercase font-bold  max-sm:flex-row max-sm:absolute max-sm:left-[5%] max-sm:right-[5%] max-sm:top-[-120px] max-sm:grid grid-cols-3 gap-3 max-sm:bg-[#C9D5FF] p-5 rounded-xl text-[#272643] duration-300 max-sm:shadow-lg  ${
        showMenu && "max-sm:top-[80px]"
      } z-40`}
    >
      {item.map((item, index) => (
        <li
          key={index}
          className="header-item cursor-pointer transition-all duration-200 hover:text-blue-600"
        >
          <a
            onClick={() => smoothScroll(`${item}`, redirectHome(`${item}`))}
            className="scroll-smooth"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderOptions;
