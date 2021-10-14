import { Injectable } from '@nestjs/common';
import { Product } from './interface/products.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async create(product: Product): Promise<string> {
    const newProduct = new this.productModel(product);
    await newProduct.save();
    return await `the item with ${newProduct.id} is successfully created`;
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
}
