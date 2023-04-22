import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

import style from "../style";

const Header = ({}) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* input search */}
            {/* <form
              className="navbar-search navbar-search-light form-inline mr-sm-3"
              id="navbar-search-main"
            >
              <div className="form-group mb-0">
                <div className="input-group input-group-alternative input-group-merge">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-action="search-close"
                data-target="#navbar-search-main"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </form> */}
            <Breadcrumb />
            {/* menu responsive */}
            <ul className="navbar-nav align-items-center  ml-md-auto ">
              <li className="nav-item d-xl-none">
                <div
                  className="pr-3 sidenav-toggler sidenav-toggler-dark"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="media align-items-center"
                    onClick={() => setShowAlert(!showAlert)}
                  >
                    <div className="media-body  ml-2  d-none d-lg-block">
                      <i className="ni ni-satisfied text-secondary me-2"></i>
                      <span className="mb-0 text-sm  font-weight-bold">
                        Hello
                      </span>
                    </div>
                  </div>
                </Link>
                {/* Alert in avatar account */}
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    showAlert && "show"
                  }`}
                >
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <Link to="/admin/myProfile" className="dropdown-item">
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link to="/admin/login" className="dropdown-item">
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header bg-primary pb-6" style={style.zIndex}>
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4"></div>
          </div>
        </div>
      </div>

      {/* <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
        id="navbarBlur"
        data-scroll="false"
      >
        <div className="container-fluid py-1 px-3">
          <Breadcrumb />
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <Link className="nav-link text-white font-weight-bold px-0">
                  <i className="fa fa-user me-sm-1" />
                  <span className="d-sm-inline d-none">Sign In</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
