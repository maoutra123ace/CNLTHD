import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/reducer/cartslice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../components/Layout/Layout";
import numberWithCommas from "../utils/ConvertNumber";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => {
    return state.rootReducer.auth;
  });
  const navigate = useNavigate();
  const { account, isLogged, isAdmmin } = auth;

  console.log(cart.cartItems);
  const dispatch = useDispatch();

  const data = {
    idAccount: auth?.account?.payload?.id || [],
  };
  //console.log(data)
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(removeFromCart(product));
      }
    });
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const storeCart = cart.cartItems.map((item) => {
    console.log(item);
    const storeCart = {
      ProductId: item._id,
      UnitPrice: item.Price,
      CartQuantity: item.cartQuantity,
    };
    return storeCart;
    // return card
  });
  const data3 = { ...data, storeCart };
  console.log(data3);

  const handleCheckout_Minh = () => {
    axios
      .post("http://localhost:5000/orders/payment", data3)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleCheckout = useCallback(() => {
    axios
      .post("http://localhost:5000/orders/payment", data3)
      .then((res) => res.json())
      .catch((error) => error);

    console.log(data3);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thanh Toán thành công",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClearCart()
    navigate(`/history/${data3.idAccount}`)
  }, []);

  return (
    <Layout>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <i class="fa-solid fa-9x fa-cart-shopping"></i>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Unit Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem._id}>
                    <div className="cart-product">
                      {/* <img
                        src={`./products-images/${cartItem.Image}`}
                        alt={cartItem.Name}
                      /> */}
                      <div>
                        <h3>{cartItem.Name}</h3>
                        {/* <p>{cartItem.Description}</p> */}
                        <img
                          src={`./products-images/${cartItem.Image}`}
                          alt={cartItem.Name}
                        />
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      ${numberWithCommas(cartItem.Price)}
                    </div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      $
                      {numberWithCommas(cartItem.Price * cartItem.cartQuantity)}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">
                    ${numberWithCommas(cart.cartTotalAmount)}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button onClick={handleCheckout}>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
