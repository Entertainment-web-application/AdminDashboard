const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController");
const verifyJWT = require("../middleware/verifyJWT");
<<<<<<< HEAD
// verifyJWT
router.post("/CreatePost/:user_id", postsController.addNewPost); 
=======
router.post("/CreatePost/:user_id", postsController.addNewPost);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
router.get("/getAllPosts", postsController.getAllPosts);

module.exports = router;
