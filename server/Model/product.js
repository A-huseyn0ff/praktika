import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductlarSchema = new Schema({
  image:{type:String},
  name:{type:String},
  price:{type:Number},
  category:{type:String}
});
export const Products=mongoose.model('pro', ProductlarSchema);