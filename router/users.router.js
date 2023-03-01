import express from 'express';
import { client } from '../index.js';
const router = express.Router();
import { createusers,getusername} from './service/users.service.js';
import bcrypt from "bcrypt"
import  Jwt  from 'jsonwebtoken';



async function generateHashedPassword(password){

  const No_of_rounds = 10;
  const salt = await bcrypt.genSalt(No_of_rounds);
  const hashedpassword = await bcrypt.hash(password,salt)
  console.log(salt);
  console.log(hashedpassword);
  return hashedpassword;
  }

  
  // login

router.post("/signup", async function (request, response) {

    const {username,password} = request.body;

    const userformdb = await getusername(username)

console.log(userformdb);


if(userformdb){

response.status(401).send({"message":"user Name already exists"})

}
else if(password.length < 8){
  
  response.status(401).send({"message":"password must be at least 8 characters"})

}

else{

      const hashedpassword =  await generateHashedPassword(password)
  
  const result = await createusers({
    username:username,
    password:hashedpassword
  })
  
    
      response.send(result);


}

  });
  











router.post("/login", async function (request, response) {

    const {username,password} = request.body;

    const userformdb = await getusername(username)

console.log(userformdb);


if(!userformdb){

response.status(401).send({"message":"invalid credentials"})

}


else{


  const storedpassword = userformdb.password


const isppasswordcheck = await bcrypt.compare(password,storedpassword)
    
  console.log(isppasswordcheck);

if(isppasswordcheck === true){
const token = Jwt.sign({id:userformdb._id},process.env.SECREAT_KEY)

response.send({"message":"successful login",token:token})

}
else{
  response.status(401).send({"message":"invalid credentials"})
}




}

  });
  





  export default router