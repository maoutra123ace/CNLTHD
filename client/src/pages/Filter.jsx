import React, { useState } from "react";
import { Menu } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getproductfilter, getproducts } from "../action/getProduct";
import { useCallback } from "react";
import axios from "axios";

function Filter({ posts, setSearchResults,setFilter,getData }) {
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  const [current, setCurrent] = useState("");
  const { isError, data, isLoading } = useQuery(
    ["productfilter"],
    getproductfilter,
    {
      staleTime: 1000,
    }
  );

  const handleClickFilterByCategory = useCallback(
    (value) => {
      axios
        .get(
          `http://localhost:5000/products/getProductsFilters?CategoryId=${value}&page=1`
        )
        .then((res) => getData(res));
    },
    [getData]
  );

  return (
    <div className="catelog__filter">
      <div className="catelog__filter__widget__content">
        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search and hit enter..."
            id="search"
            onChange={handleSearchChange}
          />
          <span>All Category</span>
        </div>
        <div className="catelog__filter__widget__title">
          <Menu
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={["1"]}
            mode="horizontal"
            selectedKeys={[current]}
          >
            {data?.map((item, index) => {
              return (
                <Menu.SubMenu
                  key={item._id}
                  title={item.Name}
                  icon={item.icon}
                  onTitleClick={(e) => handleClickFilterByCategory(e.key)}
                ></Menu.SubMenu>
              );
            })}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Filter;
