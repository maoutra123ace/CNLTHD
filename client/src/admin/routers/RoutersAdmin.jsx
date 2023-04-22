import React from "react";
import { Route, Routes } from "react-router-dom";
import ContainerMainLayoutAdmin from "../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import "../../assets/css/argon.min.css";
import "../../assets/css/nucleo-icons.css";
import TestAdmin from "../pages/Test/TestAdmin";
import ManageAccount from "../pages/ManageAccount/ManageAccount";
import ManageProduct from "../pages/ManageProduct/ManageProduct";
import ManageBrand from "../pages/ManageBrand/ManageBrand";
import ManageCategory from "../pages/ManageCategory/ManageCategory";
import ManageOrder from "../pages/ManageOrder/ManageOrder";
import ManageReceipt from "../pages/ManageReceipt/ManageReceipt";
import ManageSupplier from "../pages/ManageSupplier/ManageSupplier";
import OrderDetails from "../pages/ManageOrder/OrderDetails";

const RoutersAdmin = ({ token, currentAccount, fetchCurrentAccount }) => {
  return (
    <>
      <ContainerMainLayoutAdmin>
        <Routes>
          <Route path="/admin/test" element={<TestAdmin />} />
          <Route path="/admin/account" element={<ManageAccount />} />
          <Route path="/admin/product" element={<ManageProduct />} />
          <Route path="/admin/brand" element={<ManageBrand />} />
          <Route path="/admin/category" element={<ManageCategory />} />
          <Route path="/admin/order" element={<ManageOrder />} />
          <Route path="/admin/order/details" element={<OrderDetails />} />
          <Route path="/admin/receipt" element={<ManageReceipt />} />
          <Route path="/admin/supplier" element={<ManageSupplier />} />
        </Routes>
      </ContainerMainLayoutAdmin>
    </>
  );
};

export default RoutersAdmin;
