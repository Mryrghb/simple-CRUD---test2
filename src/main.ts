import express, { Express, Request, Response } from 'express';
const pathCrud = '../modulesAccont/Accounts';
const pathRout = './src/routes/main.ts';
import { getall, addAcc, getOneAcc } from './controllers/userControllers'
const router = express.Router();
const app: Express = express();

// to parse req.body in express you should set these two middleware to parse the req body, it add all data to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/account/List', getall);
app.get('/account/:id', getOneAcc)
app.post('/account/new', addAcc)
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(5000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:5000`);
});




// import express,{Express,Request,Response} from 'express';
// const pathCrud = '../modulesAccont/Accounts';
// const pathRout = './src/routes/main.ts';
// import {getall, addAcc,getOneAcc} from './controllers/userControllers'
// const router = express.Router();
// const app: Express = express();

// app.get('/account/List' , getall);
// app.get('/account/:id' , getOneAcc);
// app.post('/account/singIn' , addAcc);
// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(5000, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:5000`);
// });