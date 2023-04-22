import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Toast = () => {
  const notifySuccess = () =>
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    
    });

  const notifyError = () => {
    toast.error("Wow serious error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
     
    });
  };

  const notifyWarn = () => {
    toast.warn("Wow a minor warning!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
   
      // progressClassName: css({
      //   background:
      //     "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
      // })
    });
  };

  return (
    <div>
      <button onClick={notifySuccess}>Notify Success!</button>
      <button onClick={notifyError}>Notify Error!</button>
      <button onClick={notifyWarn}>Notify Warn!</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
