import React from "react";

import { Route, Routes } from "react-router-dom";

import Homepage from "../../src/pages/Homepage";
import { NoMatch } from "../../src/pages/PageError";
import Form from "../pages/Form";
import Product from "../../src/pages/Product";
import CateLog from "../../src/pages/CateLog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Layout from "../components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ActivationEmail from "../components/Form/ActivationMail";
import History from "../pages/History";
import TestAdmin from "../admin/pages/Test/TestAdmin";
import ManageAccount from "../admin/pages/ManageAccount/ManageAccount";
import ManageProduct from "../admin/pages/ManageProduct/ManageProduct";
import ManageBrand from "../admin/pages/ManageBrand/ManageBrand";
import ManageCategory from "../admin/pages/ManageCategory/ManageCategory";
import ManageOrder from "../admin/pages/ManageOrder/ManageOrder";
import ManageReceipt from "../admin/pages/ManageReceipt/ManageReceipt";
import ManageSupplier from "../admin/pages/ManageSupplier/ManageSupplier";
import OrderDetails from "../admin/pages/ManageOrder/OrderDetails";
import ReceiptDetails from "../admin/pages/ManageReceipt/ReceiptDetails";
// import ManageStatistic from "../admin/pages/ManageSupplier/ManageStatistic";

const client = new QueryClient();

const RoutersClient = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          {/* -------------------Client------------------- */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="catelog/:_id" element={<Product />} />
          <Route exact path="*" element={<NoMatch />} />
          <Route exact path="/SignIn" element={<Form />} />
          <Route exact path="/SignUp" element={<Form />} />
          <Route
            exact
            path="/account/activate/:activation_token"
            element={<ActivationEmail />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/history/:accountId" element={<History />} />
          <Route exact path="catelog/:CategoryId/:_id" element={<Product />} />
          <Route exact path="*" element={<NoMatch />} />
          <Route exact path="/catelog" element={<CateLog />} />
          {/* <Route exact path="/SignIn" element={<SignIn />} /> */}
          {/* -------------------Admin------------------- */}
          <Route path="/admin/" element={<TestAdmin />} />
          <Route path="/admin/account" element={<ManageAccount />} />
          <Route path="/admin/product" element={<ManageProduct />} />
          <Route path="/admin/brand" element={<ManageBrand />} />
          <Route path="/admin/category" element={<ManageCategory />} />
          <Route path="/admin/order" element={<ManageOrder />} />
          <Route
            path="/admin/orderDetails/:orderId"
            element={<OrderDetails />}
          />
          <Route path="/admin/receipt" element={<ManageReceipt />} />
          <Route path="/admin/receiptDetails/:receiptId" element={<ReceiptDetails />} />
          <Route path="/admin/supplier" element={<ManageSupplier />} />
          {/* <Route path="/admin/statistic" element={<ManageStatistic />} /> */}
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default RoutersClient;
