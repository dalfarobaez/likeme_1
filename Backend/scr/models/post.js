const {DB} = require('../config/db')

const existe = async (id) => {
  try {
    const SQLQuery = 'SELECT * FROM post WHERE id = $1'
    const values = [id]
    const {rowCount} = await DB.query(SQLQuery,values)
    return rowCount ? true : false
  } catch (error) {
    throw error    
  }
}

const obtienePosts = async () => {
  try {
    const SQLQuery = "SELECT * FROM post"
    const result = await DB.query(SQLQuery)
    return(result.rows)      
  } catch (error) {
    throw error
  }
}

const crear = async (titulo,imgSrc,descripcion) => {
  try {
    console.log(titulo,imgSrc,descripcion)
    const SQLQuery = "INSERT INTO post VALUES(DEFAULT, $1, $2, $3, 0) RETURNING *"
    const values = [titulo,imgSrc,descripcion]
    const result = await DB.query(SQLQuery,values)
    return(result)      
  } catch (error) {
    throw error
  }
}

const addlike = async (postId) => {
  try {
    const SQLQuery = "UPDATE post SET likes = likes + 1 WHERE id = $1 RETURNING *"
    const values = [postId]
    const result = await DB.query(SQLQuery,values)
    return(result)      
  } catch (error) {
    throw error
  }
}

const deletePost = async (postId) => {
  try {
    const SQLQuery = "DELETE FROM post WHERE id = $1 RETURNING *"
    const values = [postId]
    const result = await DB.query(SQLQuery,values)
    return(result)      
  } catch (error) {
    throw error
  }
}

module.exports = {
  crear,
  obtienePosts,
  addlike,
  deletePost,
  existe
}