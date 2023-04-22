import React from "react";
import Header from "./Header/Header";

import SideBar from "./SideBar/SideBar";

const ContainerMainLayoutAdmin = ({ children }) => {
  return (
    <>
      <div className="g-sidenav-show g-sidenav-pinned">
        <SideBar />
        <div className="main-content" id="panel">
          <Header />
          <div className="container-fluid mt--6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContainerMainLayoutAdmin;
