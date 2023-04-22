import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import path from "path";
import ProductRouter from "./routers/ProductRouter.js";
import AccountRouter from "./routers/AccountRouter.js";
import OrderRouter from "./routers/OrderRouter.js";
import OrderDetailsRouter from "./routers/OrderDetailsRouter.js";
import CategoryRouter from "./routers/CategoryRouter.js";
import BrandRouter from "./routers/BrandRouter.js";
import SupplierRouter from "./routers/SupplierRouter.js";
import ReceiptRouter from "./routers/ReceiptRouter.js";
import ReceiptDetailsRouter from "./routers/ReceiptDetailsRouter.js";
import StatisticRouter from "./routers/StatisticRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const userName = "anhvy12";
const password = "12345abc";
const databaseName = "AnhVy";
const cluster = "@anhvy.ap59gns.mongodb.net";
const URL =
  "mongodb+srv://" + userName + ":" + password + cluster + "/" + databaseName;

//add system services
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
app.set("json spaces", 2); //formatted Json

//routers
//app.use("/user", UserRouter);
//app.use("/api", Upload)
app.use("/", ProductRouter);
app.use("/", AccountRouter);
app.use("/", OrderRouter);
app.use("/", OrderDetailsRouter);
app.use("/", CategoryRouter);
app.use("/", BrandRouter);
app.use("/", SupplierRouter);
app.use("/", ReceiptRouter);
app.use("/", ReceiptDetailsRouter);
app.use("/", StatisticRouter);

//connect MongoDb
mongoose
  .connect(URL, { useNewUrlParser: true, useUniFiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDb");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connected DB Fail");
  });
