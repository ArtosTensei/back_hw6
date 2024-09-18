import { Sequelize } from "sequelize-typescript";
import { RefreshToken } from "../models/auth/RefreshToken";
import User from "../models/users/User";

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

const models = [User, RefreshToken];

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
