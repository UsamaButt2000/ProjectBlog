import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/snaps.js';

const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb://usamabutt2021:myblogapp@cluster0-shard-00-00.lusas.mongodb.net:27017,cluster0-shard-00-01.lusas.mongodb.net:27017,cluster0-shard-00-02.lusas.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-l1wp5r-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log('Server on Port: '+PORT))) 
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false); 
