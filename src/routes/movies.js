const { Router } = require('express');
const router = Router();
const _ = require('underscore')


const movies = require('../sample.json');
// get
router.get('/', (req, res) => {
    res.json(movies)
});
//post 
router.post('/', (req, res) => {
    const { title, director, year, rating }= req.body;
    if(title && director && year && rating){
    const id = movies.length + 1;
    const newMovie = {...req.body, id};
    movies.push(newMovie);
    res.json(movies)
    }else{
    res.json({error: 'There was an error.'});
    }
})
//delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1)
        }
    })
    res.send(movies)
})
//put 
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
      _.each(movies, (movie, i) => {
        if (movie.id === id) {
          movie.title = title;
          movie.director = director;
          movie.year = year;
          movie.rating = rating;
        }
      });
      res.json(movies);
    }else {
        res.status(500).json({ error: "There was an error." });
      }
    });

module.exports = router;