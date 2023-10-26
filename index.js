const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const commentRoutes = require("./routes/comment");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors());
app.use(express.json());
// xFu3dCNcGALmLdyG
mongoose
  .connect(
    "mongodb+srv://kingdev5809:xFu3dCNcGALmLdyG@cluster0.h4bgspy.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/user", userRoutes);
app.use("/comment", commentRoutes);

const server = app.listen(5000, () => console.log(`Server started on 5000`));
