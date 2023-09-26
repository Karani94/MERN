const postSchema = require("../models/post.js");

const getPosts = async (req, res) => {
  try {
    const allPost = await postSchema.find();
    res.status(200).json(allPost);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await postSchema.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const Update = await postSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(Update);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await postSchema.findByIdAndRemove(id);
    res.status(200).json({
      msg: "silme isleminiz basarili....",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
