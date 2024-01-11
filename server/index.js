import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import route from './Route/product.js'
const app=express()
app.use(express.json())
app.use(cors())
const port=4000

app.use('/products',route)

mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(port,()=>{
    console.log(`welcome to ${port}`);
})

