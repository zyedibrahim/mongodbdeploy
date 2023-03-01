import { client } from '../../index.js';

export async function createusers(data) {
    return await client
      .db("b42wd2")
      .collection("users")
      .insertOne(data);
  }

  export async function getusername(username) {
    return await client
      .db("b42wd2")
      .collection("users")
      .findOne({username:username});
  }