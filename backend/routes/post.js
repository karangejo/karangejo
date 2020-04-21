const express = require('express')
const router = express.Router()
const Post = require('../models/post')

//get all
router.get('/', async (req, res) => {
  try{
    const allPosts = await Post.find()
    res.status(200).json(allPosts)
  }catch(err){
    res.status(500).json({ message: err.message })
  }
})

// get one post by id
router.post('/id/', async (req, res) => {
  console.log(req.body.id);
  try{
    const post = await Post.find({_id: req.body.id})
    res.status(200).json(post)
  }catch(err){
    res.status(500).json({ message: err.message })
  }
})

// Creating one
router.post('/', async (req, res) => {
  console.log(req)
  const post = new Post({
    date: req.body.date,
    name: req.body.name,
    type: req.body.type,
    markdown: req.body.markdown
  })
  try {
    const newPost = await post.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// deleting one by id
router.delete('/', async (req, res) => {
    try{
        const deleted = await Post.findByIdAndDelete(req.body.id);
        console.log(deleted);
        res.json({message: 'Deleted', deleted: deleted});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router