'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '20');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', 'Девчата'),
      b = prompt('На сколько оцените его?', '7'),
      c = prompt('Один из последних просмотренных фильмов?', 'Кин-дза-дза'),
      d = prompt('На сколько оцените его?', '9');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);