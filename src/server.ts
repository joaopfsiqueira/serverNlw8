import express from 'express';
import { routes } from './routes';


const app = express();

//avisando o express que vamos receber um json
app.use(express.json())


app.use(routes)


app.listen(3333, () => {
        console.log('http://localhost:3333')
    })