import express from 'express';
import { getmovies, getmoviebyid, postmovies, deletemovies, updatemovies } from './service/movies.service.js';
const router = express.Router();


router.get("/", async function (request, response) {
    const movies = await getmovies();
  response.send(movies);
  });
  
  
  router.get(`/:id`, async function (request, response) {
    const { id } = request.params;
   const movies = await getmoviebyid(id);
    //  const movies = moviesdata.find((mv) => mv.id == id )
    movies
      ? response.send(movies)
      : response.status(404).send({ message: "not found" });
  

  });
  
  router.post("/add", async function (request, response) {
    const data = request.body;
  
    const result = await postmovies(data);
  
    response.send(result);
  });
  

  
  
  router.delete(`/:id`, async function (request, response) {
    const { id } = request.params;
  
    const result =await deletemovies(id);
    //  const movies = moviesdata.find((mv) => mv.id == id )
    result.deletedCount > 1
      ? response.send({Message: "deleted successfully"})
      : response.status(404).send({ message: "not found" });
  
    console.log(result);
  });
  router.put(`/:id`, async function (request, response) {
    const { id } = request.params;
    const data = request.body
  
  
  
    const result = await updatemovies(id, data);
    //  const movies = moviesdata.find((mv) => mv.id == id )
  
       response.send(result)
    
  
    console.log(result);
  });


  export default router;
  

