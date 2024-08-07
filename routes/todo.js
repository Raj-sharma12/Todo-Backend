// kisi route ko controller ke saath map karana hai toh controller ko fetsh karke laana padega
const express = require("express");
const router = express.Router();


// import controller
const createTodo = require("../controllers/createTodo");
// define api routes

router.post("/createTodo",() => {createTodo});

module.exports = router;
