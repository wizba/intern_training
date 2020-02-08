import { Model, Document } from 'mongoose';

export interface Child extends Document{
    feature_name:string,
    statu:string
}