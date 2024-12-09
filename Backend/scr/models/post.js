const {DB} = require('../config/db')

const obtienePosts = async () => {
  const SQLQuery = "SELECT * FROM post"
  const result = await DB.query(SQLQuery)
  return(result.rows)
}

const crear = async (titulo,imgSrc,descripcion) => {
  console.log(titulo,imgSrc,descripcion)
  const SQLQuery = "INSERT INTO post VALUES(DEFAULT, $1, $2, $3, 0)"
  const values = [titulo,imgSrc,descripcion]
  const result = await DB.query(SQLQuery,values)
  console.log('listo!',result)
}

module.exports = {
  crear,
  obtienePosts
}