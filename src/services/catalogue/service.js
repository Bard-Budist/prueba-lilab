const {
  createProduct,
  getProducts,
  getProductsByCategory
} = require('./dbOperations');
const {
  getCategory
} = require('../category/service');

const createProductService = async (price, description, stock, category) => {
  try {
    if (isNaN(price) || isNaN(stock)) {
      throw new Error("Price or stock data types invalid")
    }
    const categoryObj = await getCategory(category);

    await createProduct(price, description, stock, categoryObj[0].id);
  } catch (error) {
    console.log(error);
  }
}

const getProductService = async () => {
  try {
    return await getProducts();
  } catch (error) {
    console.log(error);
  }
}

const getProductByCategoryService = async (category) => {
  try {
    return await getProductsByCategory(category);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProductService,
  getProductService,
  getProductByCategoryService
}