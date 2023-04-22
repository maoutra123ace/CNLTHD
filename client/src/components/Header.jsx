import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Head from "./Header/Head";
import Search from "./Header/Search";

const Header = () => {
  const auth = useSelector((state) => {
    return state.rootReducer.auth;
  });

  const data = {
    idAccount: auth?.account?.payload?.id || [],
  };

  const NavItem = [
    {
      display: "Trang Chủ",
      path: "/",
    },
    {
      display: "Sản phẩm",
      path: "/catelog",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
    {
      display: "Thanh Toán",
      path: "/paypal",
    },
    {
      display: "Lịch sử đơn hàng",
      path: `/history/${data.idAccount}`,
    },
  ];

  const { pathname } = useLocation();
  const activeNavBar = NavItem.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null); /// active param when handle
  const menuLeft = useRef(null); /// toggle menuLefft
  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
  };
  const handleScroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      headerRef.current.classList.add("shrink-flex");
    } else {
      headerRef.current.classList.remove("shrink-flex");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // ------ DISUNMOUTED WHEN REMOVE FUNCTION --------------------------------
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // ----------------------Header----------------------
    <>
      <Head />
      <div className="header" ref={headerRef}>
        <Search />

        <div className="container">
          <div className="header__menu">
            <div className="header__menu__mobile-toggle" onClick={menuToggle}>
              <box-icon type="bx" name="menu-alt-left"></box-icon>
            </div>
            <div className="header__menu__left" ref={menuLeft}>
              <div className="header__menu__left__close" onClick={menuToggle}>
                <box-icon type="bx" name="chevron-left"></box-icon>
              </div>
              {NavItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={menuToggle}
                    className={`header__menu__item header__menu__left__item ${
                      index === activeNavBar ? "active" : ""
                    }`}
                  >
                    <Link to={item.path}>
                      <span>{item.display}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
