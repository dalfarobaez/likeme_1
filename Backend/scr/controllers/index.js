const {obtienePosts,crear} = require('../models/post')

const handleGetPost = async(req,res) => {
  const result = await obtienePosts()
  res.json(result)
}

const handlePostPost = (req,res) => {
  const {titulo,url,descripcion} = req.body
  crear(titulo,url,descripcion)
  console.log(descripcion)
}

module.exports = {
  handlePostPost,
  handleGetPost
}