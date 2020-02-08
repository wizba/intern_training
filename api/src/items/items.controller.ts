import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'src/interfaces/item.interface';
import { CreateItemDto } from 'src/dto/create-item.dto';
import { Parent } from 'src/interfaces/Parent.interface';

@Controller('items')
export class ItemsController {
 constructor(private readonly itemsService: ItemsService) {}

 @Get()
 findAll(): Promise<Item[]> {
  return this.itemsService.findAll();
 }

 @Get(':id')
 findOne(@Param('id') id): Promise<Item> {
  return this.itemsService.findOne(id);
 }

 @Post()
 create(@Body() createItemDto): Promise<Item> {
  return this.itemsService.create(createItemDto);
 }
 @Post('parent')
 create2(@Body() createItemDto): Promise<Parent> {
  return this.itemsService.create2(createItemDto);
 }
 @Delete(':id')
 delete(@Param('id') id): Promise<Item> {
  return this.itemsService.delete(id);
 }

 @Put(':id')
 update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
  return this.itemsService.update(id, updateItemDto);
 }
}