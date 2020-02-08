import * as mongoose from 'mongoose';

import { Model, Document,Mongoose } from 'mongoose';
export interface Parent extends Document{
name:string,
status:string,
}
