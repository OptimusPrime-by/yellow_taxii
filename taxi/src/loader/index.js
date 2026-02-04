const routes = require('../routes/');
const router = require('express').Router();
const passportRoutes = require('./passport');
const Express = require("./express");


router.use(passportRoutes);
router.use(Express);
router.use(routes);

module.exports = router;