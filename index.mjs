import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

let app = express();
app.use(express.json());
app.use(cors());

let mongoUrl = 'mongodb://localhost:27017/user_management';

mongoose.connect()

app.get('/users',(req,res) => {
  res.status(200).json({message : 'GET data'});
})


app.listen(3000,() => {
  console.log('http://localhost:3000');
})