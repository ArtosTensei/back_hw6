import { Sequelize } from "sequelize-typescript";
import Product from "../models/products/Product";
import Tag from "../models/tags/Tag";
import ProductTag from "../models/productTags/ProductTag";
import Promotion from "../models/promotions/Promotion";
import Order from "../models/orders/Order";
import OrderItem from "../models/orders/OrderItem";

const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "testing",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "1122",
  {
    host: process.env.DB_HOST || "service-postgres",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: "postgres",
    logging: console.log,
  }
);

const models = [Product, Tag, ProductTag, Promotion, Order, OrderItem];

sequelize.addModels(models);

sequelize
  .sync()
  .then(() => {
    console.log("synced models");
  })
  .catch((e) => console.log(e));

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
