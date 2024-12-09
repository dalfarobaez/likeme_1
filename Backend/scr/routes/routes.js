const {Router} = require('express')
const {handleGetPost,handlePostPost} = require('../controllers/index')

const router = Router()

router.get('/posts',handleGetPost)
router.post('/posts',handlePostPost)

module.exports = router;