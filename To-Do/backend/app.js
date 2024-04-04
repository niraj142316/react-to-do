import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import todoRoute from './routes/todoRoutes.js';



//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"5mb"}))
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cors())

//route middleware
app.use('/api/todo', todoRoute);


const port=8000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})