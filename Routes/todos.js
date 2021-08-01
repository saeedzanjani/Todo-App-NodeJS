const { Router } = require("express");

const { getTodos } = require('../Controllers/todos');

const router = new Router();

router.get("/", getTodos)

module.exports = router;
