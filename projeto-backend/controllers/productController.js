const Product = require('../models/Product');

// Listar produtos
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Buscar produto por ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Criar produto (admin)
exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, countInStock, image } = req.body;
    const product = new Product({
      name,
      description,
      price,
      countInStock,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

// Atualizar produto (admin)
exports.updateProduct = async (req, res, next) => {
  try {
    const { name, description, price, countInStock, image } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.image = image || product.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

// Deletar produto (admin)
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await product.remove();
    res.json({ message: 'Produto removido' });
  } catch (error) {
    next(error);
  }
};
