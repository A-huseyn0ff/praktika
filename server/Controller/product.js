import { Products } from '../Model/product.js'

export const getProducts=async(req,res)=>{
const data=await Products.find({})
res.send(data)
}
export const getProduct=async(req,res)=>{
    const id=req.params.id
    const data=await Products.findById(id)
    res.send(data)
}
export const deleteProduct=async(req,res)=>{
    const id=req.params.id
    const data=await Products.findByIdAndDelete(id)
    res.send(data)
}
export const postProduct=async(req,res)=>{
    
    const data= new Products({
image:req.body.image,
name:req.body.name,
price:req.body.price,
category:req.body.category
    })
    const saved =data.save()
    res.send(saved)
}
