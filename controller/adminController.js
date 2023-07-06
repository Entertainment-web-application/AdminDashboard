const pool = require("../db");
const { jwtGenerator } = require("../utils/jwtGenerator");
const bcrypt = require("bcrypt");
require("dotenv").config();
const validInfo = require("../utils/UservalidInfo");

<<<<<<< HEAD
=======
// const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

//     if (user.rows.length !== 0) {
//       return res.status(401).send("User already exists. Please log in.");
//     }

//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await pool.query(
//       "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
//       [name, email, hashedPassword]
//     );

//     const token = jwtGenerator(newUser.rows[0]);

//     res.json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);

    const admin = await pool.query(
      "SELECT * FROM admin WHERE admin_email = $1",
      [email]
    );

    if (admin.rows.length === 0) {
      return res.status(401).json("Email or password is incorrect");
    }
<<<<<<< HEAD
=======

    // const validPassword = await bcrypt.compare(
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
    //   password,
    //   admin.rows[0].user_password
    // );

    const validPassword = password == "123456";

    if (!validPassword) {
      return res.status(401).json("Email or password is incorrect");
    }

    const admin_info = admin.rows[0];

    const token = jwtGenerator(admin_info);
    return res.json({ token: token, admin_info });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

<<<<<<< HEAD
// get All posts from all users
const getAllWebPosts = async (req, res) => {
  try {
    const client = await pool.connect();

    const query =
      "SELECT post.id, post.title, post.description, post.likes, post.status, users.user_name FROM post JOIN users ON post.user_id = users.id";

    const result = await client.query(query);
    const allPosts = result.rows;

    client.release();

    res.status(200).json(allPosts);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get post comments

const getPostComments = async (req, res) => {
  let postId = req.params.postId;
  try {
    let result = await pool.query(
      "SELECT comments.id, comments.comment, comments.deleted, users.user_name FROM comments JOIN users ON comments.user_id = users.id"
    );

    const allComments = result.rows;
    res.status(200).json(allComments);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

=======
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
// Delete Post

const deletePost = async (req, res, next) => {
  let postId = req.params.postId;
  try {
    const result = await pool.query("DELETE FROM post WHERE id = $1", [postId]);

    if (result) {
      return res.json({ postDeleted: true });
    }
<<<<<<< HEAD
  } catch (error) {
=======
  } catch (err) {
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

<<<<<<< HEAD
// Delete Comment

const deleteComment = async (req, res, next) => {
  let commentId = req.params.commentId;
  try {
    const result = await pool.query(
      "UPDATE comments SET deleted = true WHERE id = $1",
      [commentId]
    );

    if (result) {
      return res.json({ commentDeleted: true });
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

=======
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
// confirm Post

const confirmPost = async (req, res, next) => {
  let postId = req.params.postId;
  try {
    const result = await pool.query(
      "UPDATE post SET status = 'confirmed' WHERE id = $1",
      [postId]
    );

    if (result) {
      return res.json({ postUpdated: true });
    }
  } catch (err) {
    console.error("Error updating posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get number of users

const getUser = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, user_email, user_name, deleted FROM users WHERE deleted = false"
    );

    const allUsers = result.rows;

    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete user

const deleteUser = async (req, res, next) => {
  let userId = req.params.userId;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [
      userId,
    ]);

    if (result) {
      return res.json({ userDeleted: true });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// add new admin

const addNewAdmin = async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const role = "admin";

    const checkEmail = await pool.query(
      "SELECT admin_email FROM admin where admin_email = $1",
      [email]
    );

    if (checkEmail.rows.length == 0) {
      const all_records = await pool.query(
        "INSERT INTO admin (admin_name, admin_email, admin_password, deleted, role) VALUES($1, $2, $3 , $4, $5) RETURNING *",
        [username, email, password, false, role]
      );

      //Add JWT token
      let token;
      try {
        token = jwt.sign({ username: username, email: email }, secretKey, {
          expiresIn: "1h",
        });
<<<<<<< HEAD
      } catch (error) {
        console.error("Error deleting posts:", error);
        res.status(500).json({ message: "Internal server error" });
=======
      } catch (err) {
        const error = new HttpError(
          "Signing up failed, please try again.",
          500
        );
        return next(error);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
      }

      all_records.rows[0].token = token;

      res.json(all_records.rows);
    } else {
      res.status(401).json({ message: "Email already exist" });
    }
  } catch (err) {
    console.log(err);
  }
};

// getAboutUsContent

const getAboutUsContent = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM aboutus");
    res.json(result.rows);
<<<<<<< HEAD
  } catch (error) {
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
=======
  } catch (err) {
    const error = new HttpError(
      "Could not fetch about us content, please try again.",
      500
    );
    return next(error);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
  }
};

//getContactUsContent

const getContactUsContent = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM contactus");
    res.json(result.rows);
<<<<<<< HEAD
  } catch (error) {
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
=======
  } catch (err) {
    const error = new HttpError(
      "Could not fetch contact us content, please try again.",
      500
    );
    return next(error);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
  }
};

// updateAboutUsContent

const updateAboutUsContent = async (req, res, next) => {
  let aboutUsText = req.body.aboutUsText;
  let whyChooseUs = req.body.whyChooseUs;

  try {
    if (aboutUsText && whyChooseUs) {
      let result = await pool.query(
        "UPDATE aboutus SET main_us_text = $1, why_choose_us = $2",
        [aboutUsText, whyChooseUs]
      );
      if (result) {
        res.json({ contentUpdated: true });
      }
    }
<<<<<<< HEAD
  } catch (error) {
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
=======
  } catch (err) {
    const error = new HttpError(
      "Could not update about us content, please try again.",
      500
    );
    return next(error);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
  }
};

// updateContactUsContent

const updateContactUsContent = async (req, res, next) => {
  let ourLocation = req.body.ourLocation;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;

  try {
    let result = await pool.query(
      "UPDATE contactus SET our_location = $1, phonenumber = $2, email = $3",
      [ourLocation, phoneNumber, email]
    );
    if (result) {
      res.json({ contentUpdated: true });
    }
<<<<<<< HEAD
  } catch (error) {
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get user msgs
const getUsersMessages = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users_feedback");

    res.json(result.rows);
  } catch (error) {
    console.error("Error deleting posts:", error);
    res.status(500).json({ message: "Internal server error" });
=======
  } catch (err) {
    const error = new HttpError(
      "Could not update contact us content, please try again.",
      500
    );
    return next(error);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
  }
};

module.exports = {
  login,
<<<<<<< HEAD
  getAllWebPosts,
=======
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
  deletePost,
  confirmPost,
  getUser,
  deleteUser,
  addNewAdmin,
  getAboutUsContent,
  getContactUsContent,
  updateAboutUsContent,
  updateContactUsContent,
<<<<<<< HEAD
  getUsersMessages,
  getPostComments,
  deleteComment,
=======
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
};
