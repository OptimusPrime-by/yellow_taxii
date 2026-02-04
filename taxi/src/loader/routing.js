/*const errorHandler = require("../middleware/errorHandler");

const express = require("express");
const router = express.Router();

const driversRouter = require("../routes/dviversRouter");
const loginRouter = require("../routes/loginRouter");
const ordersRouter = require("../routes/ordersRouter");
const usersRouter = require("../routes/usersRouter");
const signupRouter = require("../routes/signup");
const usersRouter = require("../routes/user");
const requestForDeleteRouter = require("../routes/deleteRequest");
const isUser = require("../middleware/auth");
const isAdmin = require("../middleware/auth");
const isDriver = require("../middleware/auth");


router.use("/signup", loginRouter);
router.use("/login", loginRouter);
router.use(isUser);
router.use("/account", accountRouter);
router.use("/logout", logoutRouter);
router.use("/product", productRouter);
router.use("/deleteRequest", requestForDeleteRouter);
router.use(isAdmin);
router.use("/users", usersRouter);
router.use(errorHandler);

module.exports = router;*/