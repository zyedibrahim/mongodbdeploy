import { client } from '../../index.js';

export async function updatemovies(id, data) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deletemovies(id) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function postmovies(data) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .insertOne(data);
}
export async function getmoviebyid(id) {
  return await client
    .db("b42wd2")
    .collection("movies")
    .findOne({ id: id });
}
export async function getmovies() {
  return await client
    .db("b42wd2")
    .collection("movies")
    .find({})
    .toArray();
}
