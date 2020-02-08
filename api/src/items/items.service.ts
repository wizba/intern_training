import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/interfaces/item.interface';
import { CreateItemDto } from 'src/dto/create-item.dto';
import { Parent } from 'src/interfaces/Parent.interface';
import { ParentDto } from 'src/dto/Parent.dto';

@Injectable()
export class ItemsService {
 constructor(@InjectModel('Item') private readonly itemModel:  Model<Item>,
 @InjectModel('Menus') private dataModel :Model<Parent>) {}

 async findAll(): Promise<Item[]> {
  return await this.itemModel.find();
 }

 async findOne(id: string): Promise<Item> {
  return await this.itemModel.findOne({ _id: id });
 }

 async create(item): Promise<Item> {
  const newItem = new this.itemModel(item);
  return await newItem.save();
 }

 async create2(item:ParentDto): Promise<Parent> {
    const newItem = new this.dataModel(item);
    return await newItem.save();
   }

 async delete(id: string): Promise<Item> {
  return await this.itemModel.findByIdAndRemove(id);
 }

 async update(id: string, item: CreateItemDto): Promise<Item> {
  return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
 }
}