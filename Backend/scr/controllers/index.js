const {obtienePosts,crear,addlike,deletePost,existe} = require('../models/post')

const handleGetPost = async(req,res,next) => {
  try {
    const result = await obtienePosts()
    res.status(200).json(result)    
  } catch (error) {
    next(error)
  }
}

const handlePostPost = async (req,res,next) => {
  try {
    const {titulo,url,descripcion} = req.body
    const response = await crear(titulo,url,descripcion)
    console.log(response)
    res.status(200).json({
      msg:"Post creado",
      data:response
    })
    res.send
  } catch (error) {
    next(error)
  }
}

const handlePutPost = async (req,res,next) => {
  try {
    const {id} = req.params

    const exist = await existe(id)
    if(!exist) {
      throw new Error('post_no_encontrado')
    }

    const response = await addlike(id)
    res.status(200).json({
      msg:"Post modificado",
      data:response
    })
    res.send
  } catch (error) {
    next(error)
  }
}

const handleDeletePost = async (req,res,next) => {
  try {
    const {id} = req.params
    
    const exist = await existe(id)
    if(!exist) {
      throw new Error('post_no_encontrado')
    }

    const response = await deletePost(id)
    res.status(200).json({
      msg:"Post eliminado",
      data:response
    })
    res.send
  } catch (error) {
    next(error)
  }
}

module.exports = {
  handlePostPost,
  handleGetPost,
  handlePutPost,
  handleDeletePost
}