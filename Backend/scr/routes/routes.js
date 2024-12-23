const {Router} = require('express')
const {handleGetPost,handlePostPost,handlePutPost,handleDeletePost} = require('../controllers/index')

const router = Router()

router.get('/posts',handleGetPost)
router.post('/posts',handlePostPost)
router.put('/posts/like/:id',handlePutPost)
router.delete('/posts/:id',handleDeletePost)

module.exports = router;