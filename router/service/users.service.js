import { client } from '../../index.js';

export async function createusers(data) {
    return await client
      .db("b42wd2")
      .collection("signup")
      .insertOne(data);
  }