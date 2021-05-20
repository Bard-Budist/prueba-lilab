const {
  getCategory
} = require('../category/dbOperations');

const getCategoryService = async (name) => {
  try {
    const category = await getCategory(name);
    console.log(category);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategory
}