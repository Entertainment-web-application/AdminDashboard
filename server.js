require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
<<<<<<< HEAD
// npm i body-parser -- FA
=======
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes");
<<<<<<< HEAD
const adminRoutes = require("./routes/adminRoutes"); // --FA
const postsRoutes = require("./routes/posts"); 

const PORT = process.env.PORT;
const pool = require("./db");
//Moving up
=======
const adminRoutes = require("./routes/adminRoutes");
const postsRoutes = require("./routes/posts");

const PORT = process.env.PORT;
const pool = require("./db");
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
app.use(cors());
app.use(express.json());

pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database:", err);
  });

<<<<<<< HEAD
app.use("/images", express.static("images"));
app.use("/post", require("./routes/posts"));
app.use("/users", userRoutes);
app.use("/admin", adminRoutes); // Added -- FA
=======
// app.use("/images", express.static("images"));
// app.use("/post", require("./routes/posts"));
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
app.use("/posts", postsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
