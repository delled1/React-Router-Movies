import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from "./Movies/MovieList"
import { Route, Switch } from "react-router-dom"
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

<Switch>
        <Route exact path="/"  component={MovieList} >
          <MovieList movie={movieList}/>
        </Route>
        <Route path="/movies/:id" component={Movie}>
          <Movie item={movieList} />
        </Route>
        </Switch>


    </div>
  );
}
