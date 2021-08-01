const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const indexRoutes = require("./Routes/todos");
const adminRoutes = require("./Routes/admin");
const connectDb = require("./Config/db");

const app = express();

//* Connect to Database
connectDb();

dotEnv.config({ path: "./Config/config.env" });

//* bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//* Static
app.use(express.static(path.join(__dirname, "public")));

//* Morgan
if(process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
}

//* View Engine
app.set("view engine", "ejs");
app.set("View", "View");

//* Routes
app.use(indexRoutes);
app.use(adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(
    `Server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
