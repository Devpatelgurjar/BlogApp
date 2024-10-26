 const express = require("express");

 //router object
 const router = express.Router();

 //routes

// GET||All blog
router.get('/all-blog');

// GET||Single blog
router.get('/get-blog/:id');

// POST||Create blog
router.post('/create-blog');

//PUT||Update blog
router.put('/update-blog/:id');

//Delete||delete blog
router.delete('/delete-blog/:id');

modules.export = router;

