const {
  query, 
  con
} = require('../../db/conn');

const createProduct = async (price, description, stock, categoryId) => {
  try {
    const sql = `INSERT INTO product
    (price, description, stock, categoryId)
    VALUES(${price}, "${description}", ${stock}, ${categoryId})`;
    const result = await con.query(sql);
    console.log(result);
    return true;
  } catch (error) {
    throw new Error("Error creating product -dbOperations " +  error);
  }
}

const getProducts = async () => {
  try {
    const sql = `SELECT *
    FROM product`
    return await query(sql);
  } catch (error) {
    throw new Error("Error consulting products -dbOperations " +  error);
  }
}

const getProductsByCategory = async (category) => {
  try {
    const sql = `SELECT *
    FROM product
    INNER JOIN category
    ON category.id = product.categoriId
    WHERE category.name = "${category}"`
    return await query(sql);
  } catch (error) {
    throw new Error("Error consulting products by category -dbOperations " +  error);
  }
}

const shopStock = async (id, cant) => {
  try {

    const sql = `UPDATE lilab.product
    SET stock=${cant}
    WHERE id=${id};
    `
    return await query(sql);
  } catch (error) {
    throw new Error("Error operation stock -dbOperations " +  error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductsByCategory,
  shopStock
}

