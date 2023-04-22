import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Helmet from "../components/Helmet";
import Section from "../components/Section/Section";
import SectionTitle from "../components/Section/SectionTitle";
import SectionBody from "../components/Section/SectionBody";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductView from "../components/ProductView/ProductView";
import { useParams } from "react-router-dom";
import productsData from "../assets/data-fake/product-data";
import { getallproducts, getproducts } from "../action/getProduct";
import PageError from "../components/PageServerLoading/PageError";
import PageLoading from "../components/PageServerLoading/PageLoading";
import Layout from "../components/Layout/Layout";

const Product = () => {
  const params = useParams();
  const { isError, data, isLoading } = useQuery(["sllproducts"], getallproducts, {
    staleTime: 0,
  });
console.log(data)
  const getProductById = (_id) => {
    const findId = data?.find((e) => {
      console.log(e._id);
      return e._id === _id;
    });

    return findId;
  };
console.log(getProductById(params._id))
  const product = getProductById(params._id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  if (isError) {
    return (
      <div>
        <PageError />
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  }

  return (
    <Layout>
      <Helmet title={product?.Name}>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {data?.map((item, index) => (
                <ProductCard
                  key={index}
                  Image2={`./products-images/${item.Image}`}
                  title={item.Name}
                  Image={`./products-images/${item.Image}`}
                  Price={parseInt(item.Price)}
                  CategoryId={item.CategoryId}
                  _id={item._id}
                  Quantity={item.Quantity}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    </Layout>
  );
};

export default Product;
