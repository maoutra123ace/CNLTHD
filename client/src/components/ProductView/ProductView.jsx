import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';

import {  addToCart } from '../../redux/reducer/cartslice'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import numberWithCommas from "../../utils/ConvertNumber";
const ProductView = (props) => {
  let product = props.product;
  if (product === undefined)
    product = {
      Name: "",
      Price: "",
      Image: null,
      Description: "",
      CategoryId: "",
    };

  const [previewImg, setPreviewImg] = useState(product.Image);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };  

  useEffect(() => {
    setPreviewImg(product.Image);
    setQuantity(1);
  }, [product]);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm thành công',
        showConfirmButton: false,
        timer: 1500
      })
};
const dispatch = useDispatch()
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.Image)}
          >
            <img src="" alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.Image)}
          >
            <img src="" alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={`./products-images/${product.Image}`} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.Description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">Tên sản phẩm: {product.Name}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            Giá Tiền: {numberWithCommas(product.Price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus">-</i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus">+</i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={handleAddToCart}>thêm vào giỏ</Button>
          <Button>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.Description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
  
ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
