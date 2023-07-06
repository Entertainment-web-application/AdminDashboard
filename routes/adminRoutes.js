const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const validInfo = require("../utils/UservalidInfo");

// router.post('/signup', validInfo, userController.signup);
// get number of users
router.get("/get-users", adminController.getUser);
router.get("/get-aboutus", adminController.getAboutUsContent);
router.get("/get-contactus", adminController.getContactUsContent);
router.post("/login", adminController.login);
router.delete("/delete-post/:postId", adminController.deletePost);
router.delete("/delete-user/:userId", adminController.deleteUser);
router.patch("/confirm-post/:postId", adminController.confirmPost);
// update
router.patch("/update-aboutus-content", adminController.updateAboutUsContent);
router.patch(
  "/update-contactus-content",
  adminController.updateContactUsContent
);
router.post("/add-new-admin", adminController.addNewAdmin);

module.exports = router;
