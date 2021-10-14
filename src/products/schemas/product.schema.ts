import * as mongoose from 'mongoose';
export const productSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
  productQty: Number,
});
