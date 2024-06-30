const express = require(`express`);
const app = express();

const { products } = require('./data');

// for getting all product
app.get('/', (req, res) => {
  res.json(products);
});

// for removing a description
app.get('/api/products', (req, res) => {
  const newproducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newproducts);
});

// for getting a single  product
app.get('/api/products/1', (req, res) => {
  const singleproduct = products.find((product) => product.id === 1);
  res.json(singleproduct);
});

// for getting a single product using params
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;

  const singleproduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleproduct) {
    res.status(404).send('product not found');
  }
  res.json(singleproduct);
});

//query parameter
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  sortedproducts = [...products];

  if (search) {
    sortedproducts = sortedproducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedproducts = sortedproducts.slice(0, Number(limit));
  }
  if (sortedproducts.length < 1) {
    res.status(200).json({ success: true, data: [] });
  }
  res.json(sortedproducts);
});

//dont know some review shit
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

//server listening
app.listen(5000, (req, res) => {
  console.log('server is listening at 5000');
});
