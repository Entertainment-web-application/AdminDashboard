require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const postsRoutes = require("./routes/posts");

const PORT = process.env.PORT;
const pool = require("./db");
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

// app.use("/images", express.static("images"));
// app.use("/post", require("./routes/posts"));
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/posts", postsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
