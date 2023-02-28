import express from 'express';
import { client } from '../index.js';
const router = express.Router();
import { createusers } from './service/users.service.js';
import bcrypt from "bcrypt"

async function generateHashedPassword(password){

  const No_of_rounds = 10;
  const salt = await bcrypt.genSalt(No_of_rounds);
  const hashedpassword = await bcrypt.hash(password,salt)
  console.log(salt);
  console.log(hashedpassword);
  return hashedpassword;
  }

  

router.post("/signup", async function (request, response) {

    const {username,password} = request.body;

    const hashedpassword =  await generateHashedPassword(password)

const result = await createusers({
  username:username,
  password:hashedpassword
})

  
    response.send(result);
  });
  
  export default router