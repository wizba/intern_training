import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ 
    MongooseModule.forRoot(
    'mongodb://mongo:27017/testDB',
  ), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
