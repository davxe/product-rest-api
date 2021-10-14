import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './interface/products.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<string> {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Product> {
    return this.productsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: CreateProductDto,
    @Param('id') id,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }
}
