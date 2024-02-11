import express, { Request, Response, response } from 'express';
import user from '../db/users.json';

import fs, { readFile, writeFile } from 'fs'


interface user {
  id: number;
  userName: string;
  pass: string;
  email: string;
}

import users from '../db/users.json';
import { resolve } from 'path';

// const userList: users[] = userss;

const listOfacc: user[] = users;
// const acc: users = JSON.parse(path)
// export type test = typeof user;
// let userAccont: typeof user;

const path = resolve(__dirname, '../db/users.json');

const getAccounts = () => {
  const jsonData = fs.readFileSync(path)
  return JSON.parse(JSON.stringify(jsonData))
}

const saveAccountData = (data: string, id: string, userName: string, email: string, pass: string) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(path, stringifyData)
}




export const getOneAccount =
  (
    userName: string,
    id: number,
    email: string
  )/*:Promise <users>*/ => {
    const existAccounts = listOfacc
    let foundedAcount = null;
    if (id) {
      const foundedByUserName = existAccounts.find((ac) => ac.id === id);
      if (foundedByUserName) {
        return foundedByUserName
      }

    }
  };

// accountRoutes.get('/account', (req, res) => {
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       throw err;
//     }

//     res.send(JSON.parse(data));
//   });
// });

//READ ALL------------------------------------------------------------------------------------
export const getall = async (req: express.Request, res: express.Response) => {
  return res.status(200).json({
    data: listOfacc
  })
}

// read one account - resolved 
export const getOneAcc = async (req: express.Request, res: express.Response) => {
  const myReq = parseInt(req.params["id"])
  const foundedAcount = users.find((acc) => acc.id === myReq)
  res.send(foundedAcount)
}


//test CREATE - solved by another person ---- Needs correction
export const addAcc = async (req: Request, res: Response) => {
  
  const newAccountId = Math.floor(100000 + Math.random() * 900000);

  readFile(path, 'utf8', (_, data) => {
    const lastIndex = data.lastIndexOf(']');
    const newData = data.substring(0, lastIndex) + "," +JSON.stringify({ id: newAccountId, ...req.body }) + data.substring(lastIndex);

    writeFile(path, newData, () => { });
  });

  return res.send({ success: true, msg: 'account data added successfully' })
};



//test update
// export const updateAcc = async (req: Request, res: Response) => {


//   const existAccount = getAccounts();
//   const accountData = req.body;

//   // Incoming data validation
//   if(accountData.userName === null || accountData.email === null || accountData.password === null ) {
//       return res.status(401).send({error: true, msg: 'account Data missing'});
//   }
  
//   // Check whether the request Todo exists in Todos.JSON
//   existAccount.find((account: any) => {
//       if(existAccount.userName === accountData.userName) {
//         account.email = accountData.email;
//       }
//   })
//   console.log(JSON.stringify(existAccount));

//   saveAccountData(existAccount);
//   res.send({success: true, msg: 'account data updated successfully'});

// }