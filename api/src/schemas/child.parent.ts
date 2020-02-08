import * as mongoose from 'mongoose';
  export const FeatureSchema = new mongoose.Schema({
     feature_name :{
            type : String
        },
        status :{
            type : String,
            default: false
        }
  });