import express from "express";
import * as AccountController from "../controllers/AccountController.js";
import auth from "../middleware/Auth.js";
import authAdmin from "../middleware/AuthAdmin.js";
// const uploadImage = require('../middleware/UploadImage.js')
// const uploadController = require('../controllers/UploadController.js')
//const API_URL = require('../../client/src/url/url')

const AccountRouter = express.Router();

//==================Get==================
AccountRouter.get(
  "/accounts/getAccountsFilters",
  AccountController.getFiltersAccount
);

AccountRouter.get(
  "/accounts/getAccountById/:_id",
  AccountController.getAccountById
);
AccountRouter.get(
  "/account/logout",
  AccountController.logout
);

//==================Post==================
AccountRouter.post("/account/register", AccountController.register);
AccountRouter.post("/account/activate", AccountController.activationEmail);
AccountRouter.post("/account/refresh_token", AccountController.getAccessToken);
AccountRouter.post("/account/login", AccountController.login);
AccountRouter.post("/account/forgot_password", AccountController.forgotPassword);
AccountRouter.post("/account/reset", auth, AccountController.resetPassword);
//AccountRouter.post("/account/upload_image", uploadImage, auth, uploadController.uploadCtrl.uploadAvatar);

AccountRouter.post("/account")

//==================Put==================
AccountRouter.put(
  "/accounts/updateAccount/:_id",
  AccountController.updateAccount
);

//==================Delete==================
AccountRouter.delete(
  "/account/deleteAccount/:_id",
  auth, authAdmin, AccountController.deleteAccount
);

export default AccountRouter;
