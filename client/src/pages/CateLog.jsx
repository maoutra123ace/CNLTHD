import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getproducts } from "../action/getProduct";
import PageError from "../components/PageServerLoading/PageError";
import PageLoading from "../components/PageServerLoading/PageLoading";
import callApi from "../api";
import Filter from "./Filter";
import ReactPaginate from "react-paginate";
import ListPage from "./ListPage";
import Layout from "../components/Layout/Layout";

const CateLog = () => {
  const [items, setItem] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState([]);
  const [props, setProps] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 8;

  async function fetchALL(current) {
    const response = await callApi(
      `products/getProductByOffsetLimit/${current}/${limit}`,
      "GET",
      null
    );
    const products = response;
    return products.data;
  }

  useEffect(() => {
    async function getALL() {
      const response = await callApi(
        `products/getProductByOffsetLimit/1/${limit}`,
        "GET",
        null
      );
      const response2 = await callApi(
        `products/getProductByOffsetLimit/:offset/:limit`,
        "GET",
        null
      );
      const data = await response.data;
      const total = response2.data.length;
      console.log(total);
      setpageCount(Math.ceil(total / limit));
      setSearchResults(data);
      setProps(response.data);
    }
    getALL();
  }, [limit]);

  const handleClickPaginate = async (data) => {
    const currentPage = data.selected + 1;
    const fetch = await fetchALL(currentPage);
    setSearchResults(fetch);
    setFilter(fetch);
  };
  return (
    <Layout>
      <Helmet title="Sản phẩm">
        <div className="catelog">
          <Filter
            getData={(e) => {
              setItem(e.data);
            }}
          />
          <div className="catelog__content">
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {items?.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    Image={item.Image}
                    Name={item.Name}
                    Image2={item.Image}
                    Price={parseInt(item.Price)}
                    CategoryId={item.CategoryId}
                    _id={item._id}
                    Quantity={item.Quantity}
                  />
                );
              })}
            </Grid>
            {/* <div style={{ width: "500px", margin: "auto" }}>
            <Pagination defaultCurrent={1} total={products.length} />
          </div> */}
          </div>
        </div>
        <ReactPaginate
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayedge={6}
          onPageChange={handleClickPaginate}
          pageClassName={"page-item"}
          containerClassName={"pagination justify-content-center"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
        />
      </Helmet>
    </Layout>
  );
};
export default CateLog;
