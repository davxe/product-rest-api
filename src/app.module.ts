import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import config from './config/connection';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
