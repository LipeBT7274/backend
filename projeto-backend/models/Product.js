const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Informe o nome do produto'],
  },
  description: {
    type: String,
    required: [true, 'Informe a descrição'],
  },
  price: {
    type: Number,
    required: [true, 'Informe o preço'],
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
