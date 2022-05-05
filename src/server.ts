import express from 'express';
import { routes } from './routes';
import cors from 'cors'


const app = express();

//cors é basicamente uma forma de controle de segurança.
//Limitando quais endereços podem usar o nosso produto.
//nesse caso, todos os acessos estão abertos, caso contrário ninguém acessaria.
app.use(cors());

//avisando o express que vamos receber um json
app.use(express.json())


app.use(routes)


app.listen(3333, () => {
        console.log('http://localhost:3333')
    })