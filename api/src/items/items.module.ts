import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from 'src/schemas/item.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
controllers: [ItemsController],
providers: [ItemsService],
})
export class ItemsModule {}
