const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const validInfo = require("../utils/UservalidInfo");

router.post("/signup", validInfo, userController.signup);
router.post("/login", validInfo, userController.login);

<<<<<<< HEAD
// get user posts on users profile --FA
=======
// get user posts
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
router.get("/get-user-posts/:userId", userController.getUserPosts);

module.exports = router;
