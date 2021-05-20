const {
  query, 
  con
} = require('../../db/conn');

const getCategory = async (name) => {
  try {
    const sql = `SELECT id
    FROM category
    WHERE name = "${name}"`;
    return await query(sql);
  } catch (error) {
    throw new Error("Error consulting category -dbOperations " +  error);
  }
}

module.exports = {
  getCategory
}