import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider/Slider";
import Helmet from "../components/Helmet";
import sliderImage from "../assets/data-fake/data-img";
import logos from "../assets/data-fake/Logo";
import Section from "../components/Section/Section";
import SectionBody from "../components/Section/SectionBody";
import SectionTitle from "../components/Section/SectionTitle";
import PolicyCard from "../components/Policy/PolicyCard";
import policy from "../assets/data-fake/policy-data";
import Grid from "../components/Grid/Grid";
// import productData from "../assets/data-fake/product-data";
import ProductCard from "../components/ProductCard/ProductCard";
// import { productData, getProducts, getALLproducts } from "../api";
import PageError from "../components/PageServerLoading/PageError";
import PageLoading from "../components/PageServerLoading/PageLoading";
import { getproducts } from "../action/getProduct";
import Sliderlogo from "../components/Slider/Sliderlogo";
import Layout from "../components/Layout/Layout";
const Homepage = () => {
  const { isError, data, isLoading } = useQuery(["product"], getproducts, {
    staleTime: 1000,
  });
  useEffect(() => {
    console.log("components mounted");
  }, []);
  if (isError) {
    return (
      <div>
        <PageError />
      </div>
    );
  }

  // if (isLoading) {
  //   return (
  //     <div>
  //       <PageLoading />
  //     </div>
  //   );
  // }
  return (
    <Layout>
      {/* this is slider-content */}
      <Helmet title="Trang chủ">
        <Sliders data={sliderImage} />
        <Section>
          <SectionTitle>Thương hiệu nổi bật</SectionTitle>
          <SectionBody>
            <Sliderlogo data={logos} />
          </SectionBody>
        </Section>

        {/* this is policy section  */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => {
                return (
                  <PolicyCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                    color={item.color}
                    size={item.size}
                  />
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
        {/* end policy section */}
        {/* best policy section  */}
        <Section>
          <SectionTitle>Top sản phẩm bán nhiều nhất</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {data?.map((item, index) => {
                console.log(item.Image);
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
          </SectionBody>
        </Section>
      </Helmet>
    </Layout>
  );
};
export default Homepage;
