import { ObjectId } from 'mongodb';
import { client } from '../../index.js';

export async function updatemovies(id, data) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function deletemovies(id) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function postmovies(data) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .insertMany(data);
}
export async function getmoviebyid(id) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
}
export async function getmovies(query) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .find(query)
    .toArray();
}
