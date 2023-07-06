const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const validInfo = require("../utils/UservalidInfo");

<<<<<<< HEAD
// get all web posts
router.get("/getAllWebPosts", adminController.getAllWebPosts);

// get post comments
router.get("/get-post-comments/:postId", adminController.getPostComments);

=======
// router.post('/signup', validInfo, userController.signup);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
// get number of users
router.get("/get-users", adminController.getUser);
router.get("/get-aboutus", adminController.getAboutUsContent);
router.get("/get-contactus", adminController.getContactUsContent);
<<<<<<< HEAD
router.get("/users-messages", adminController.getUsersMessages);

router.post("/login", adminController.login);
router.delete("/delete-post/:postId", adminController.deletePost);
router.delete("/delete-user/:userId", adminController.deleteUser);
router.delete("/delete-comment/:commentId", adminController.deleteComment);
=======
router.post("/login", adminController.login);
router.delete("/delete-post/:postId", adminController.deletePost);
router.delete("/delete-user/:userId", adminController.deleteUser);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
router.patch("/confirm-post/:postId", adminController.confirmPost);
// update
router.patch("/update-aboutus-content", adminController.updateAboutUsContent);
router.patch(
  "/update-contactus-content",
  adminController.updateContactUsContent
);
router.post("/add-new-admin", adminController.addNewAdmin);

module.exports = router;
