const express = require('express');
const router = express.Router();
const {
  getProductService,
  getProductByCategoryService,
  createProductService,
  setStockService
} = require('../../services/catalogue/service');

router.get('/products', async (res, req) => {
  try {
    const result = await getProductService();
    req.send(JSON.parse(JSON.stringify(result)));
  } catch (error) {
    req.status(500).send("Erros " + error)
  }
});

router.get('/products/:category', async (res, req) => {
  try {
    const result = await getProductByCategoryService(req.req.params.category);
    req.send(JSON.parse(JSON.stringify(result)));
  } catch (error) {
    req.status(500).send("Erros " + error)
  }
});

router.post('/products', async (res, req) => {
  try {
    const {
      description,
      stock,
      price,
      category
    } = req.req.body;
    await createProductService(price, description, stock, category);
    req.send({ status: 'ok'});
  } catch (error) {
    console.log(error);
    req.status(500).send("Erros " + error)
  }
});


router.put('/product/stock', async (res, req) => {
  try {
    const {
      id,
      stock,
      cant
    } = req.req.body;
    await setStockService(id, stock, cant);
    req.send({ status: 'ok'});
  } catch (error) {
    console.log(error);
    req.status(500).send("Erros " + error)
  }
})

module.exports = router;