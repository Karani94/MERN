const express = require("express");
const {
  createPosts,
  updatePost,
  deletePost,
  getPosts,
} = require("../controllers/post.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPosts", auth, createPosts);
router.patch("/updatePost/:id", auth, updatePost);
router.delete("/deletePost/:id", auth, deletePost);

module.exports = router;
