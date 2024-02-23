import React, { useEffect, useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo } from "../../assets/images";
import { smoothScroll } from "../../utility/smoothScroll";
import { Link, useLocation, useParams } from "react-router-dom";
import MyImage from "../myImage/myImage";

import { headersSection } from "./../../assets/content/index.js";
import HeaderOptions from "../headerOptions/HeaderOptions.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [homeHeader, setHomeHeader] = useState(false);

  const { home, portfolio } = headersSection;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname.includes("/protfolio")) {
      setHomeHeader(true);
    } else {
      setHomeHeader(false);
    }
  }, [location]);

  return (
    <>
      <div classNameName="container bg-white min-w-full py-2 xl:py-2 relative">
        <ContentWrapper>
          <div classNameName="flex justify-between items-center">
            <span classNameName="header-logo h-[60px] w-[160px]">
              <Link to={"/"}>
                <MyImage src={logo} classNameName="logo h-full" />
              </Link>
            </span>
            {!homeHeader
              ? HeaderOptions(home, showMenu, homeHeader)
              : HeaderOptions(portfolio, showMenu, homeHeader)}
            <div classNameName="text-[26px] md:hidden sm:visible font-[#272643]">
              {!showMenu ? (
                <i
                  className="ri-menu-line"
                  onClick={() => setShowMenu(true)}
                ></i>
              ) : (
                <i
                  className="ri-close-fill"
                  onClick={() => setShowMenu(false)}
                ></i>
              )}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Header;
