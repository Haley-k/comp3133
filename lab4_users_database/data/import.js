require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const User = require("../model/User");

const DB_NAME = process.env.DB_NAME;
const DB_USER_NAME = process.env.DB_USER_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const CLUSTER_ID = process.env.CLUSTER_ID;
DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster63457.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const users = JSON.parse(fs.readFileSync("data/UsersData.json", "utf-8"));

const importData = async () => {
  try {
    await User.insertMany(users);
    console.log("Users inserted successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
