require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, CLIENT_ORIGIN } = require('./config')
const errorHandler = require('./middleware/error-handler')
const authRouter = require('./routes/auth-router')
const ordersRouter = require('./routes/orders-router')
const productsRouter = require('./routes/products-router')
const app = express();

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting))
app.use(helmet());
app.use(
    cors({
      origin: CLIENT_ORIGIN,
    })
  );


app.use(errorHandler)


app.use("/api/auth", authRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/products", productsRouter);


module.exports = app;
