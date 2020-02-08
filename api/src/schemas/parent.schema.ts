

  import * as mongoose from 'mongoose';

export const MenusSchema = new mongoose.Schema({
    name :{
        type : String
    },
    feature_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child',
    },
    status :{
        type : String
    }
});