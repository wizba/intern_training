import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from 'src/schemas/item.schema';
import { MenusSchema } from 'src/schemas/parent.schema';
import { FeatureSchema } from 'src/schemas/child.parent';


@Module({
  imports: [MongooseModule.forFeature([
  { name: 'Item', schema: ItemSchema },
  {name:'Menus',schema:MenusSchema },
  {name:'Feature',schema:FeatureSchema}
])],
controllers: [ItemsController],
providers: [ItemsService],
})
export class ItemsModule {}
