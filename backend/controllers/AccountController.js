import * as AccountSvc from "../services/AccountSvc.js";
import { AccountModel } from "../models/data/AccountModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import sendMail from "./SendMail.js";
import sendEmail from "./SendMail.js";
import { google } from "googleapis";

const { OAuth2 } = google.auth;
const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

export const register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !address || !phone)
      return res.status(400).json({ msg: "Please fill in all the field." });

    if (!validateEmail(email))
      return res.status(400).json({ msg: "Invalid email." });

    const account = await AccountModel.findOne({ email });
    if (account)
      return res.status(400).json({ msg: "This email already exist" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 character." });

    const passwordHash = await bcrypt.hash(password, 12);
    const newAccount = new AccountModel({
      name,
      email,
      password: passwordHash,
      address,
      phone,
    });
    //await newAccount.save()
    const activation_token = createActivationToken(newAccount);

    //console.log({ name, email, password })
    const url = `${CLIENT_URL}/account/activate/${activation_token}`;
    //console.log(url)

    // //send mail
    sendEmail(email, url, "Verify your email address");

    res.json({ msg: "Register Success! Please activate your email to start." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const activationEmail = async (req, res) => {
  try {
    const { activation_token } = req.body;
    //console.log(activation_token)
    const account = jwt.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    );
    //console.log("ahfkjahsldf",account)
    const { name, email, password, address, phone } = account.payload;
    // console.log(name)
    // console.log(account.email)
    // console.log(account.password)
    const check = await AccountModel.findOne({ email });
    //console.log(check)
    if (check)
      return res.status(400).json({ msg: "This email already exists." });

    const newAccount = new AccountModel({
      name,
      email,
      password,
      phone,
      address,
    });
    //console.log(newAccount);
    await newAccount.save();

    res.json({ msg: "Account has been activated!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await AccountModel.findOne({ email });
    if (!account)
      return res.status(400).json({ msg: "This email does not exists." });

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Password is incorrect." });

    const refresh_token = createRefreshToken({ id: account._id });
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      path: "/account/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    });
    // console.log(account);
    res.json({
      msg: "Login success!",
      data: {
        id: account._id,
        email: account.email,
        name: account.name,
        phone: account.phone,
        address: account.address,
        role: account.role,
        avatar: account.avatar,
      },
      token: refresh_token,
    });
    // {
    //   data: {
    //     email: "",
    //     name: "",
    //     address: "",
    //     phone: "",
    //     token: {
    //       token: "",
    //       refresh_token: ""
    //     }
    //   },
    //   status: "success"
    // }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getAccessToken = (req, res) => {
  try {
    const rf_token = req.cookies.refresh_token;
    if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, account) => {
      if (err) return res.status(400).json({ msg: "Please login now!" });
      const access_token = createAccessToken({ id: account.id });
      res.json({ access_token });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const account = await AccountModel.findOne({ email });
    if (!account)
      return res.status(400).json({ msg: "This email does not exists." });

    const access_token = createAccessToken({ id: account._id });
    const url = `${CLIENT_URL}/account/reset/${access_token}`;

    sendEmail(email, url, "Reset your password");
    res.json({ msg: "Re-send the password, please check your email." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    // console.log(password);
    const passwordHash = await bcrypt.hash(password, 12);

    await AccountModel.findOneAndUpdate(
      { _id: req.account.id },
      {
        password: passwordHash,
      }
    );

    res.json({ msg: "Password successfully changed!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("refresh_token", { path: "/account/refresh_token" });
    return res.json({ msg: "Logged out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await AccountModel.findByIdAndDelete(req.params.id);

    res.json({ msg: "Deleted Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const createActivationToken = (payload) => {
  //console.log(payload)
  return jwt.sign({ payload }, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};
const createAccessToken = (payload) => {
  return jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const createRefreshToken = (payload) => {
  return jwt.sign({ payload }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
export const getFiltersAccount = async (req, res) => {
  try {
    const accounts = await AccountSvc.getFiltersAccount(req.query);

    return res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const account = await AccountSvc.getAccountById(req.params);
    return res.status(200).json(account);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addAccount = async (req, res) => {
  try {
    const account = req.body;
    const newAccount = await AccountSvc.addAccount(account);

    return res.status(200).json(newAccount);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const { _id } = req.params;
    const account = req.body;

    await AccountSvc.updateAccount(_id, account);

    const accountUpdate = await AccountSvc.getAccountById(_id);

    return res.status(200).json(accountUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
