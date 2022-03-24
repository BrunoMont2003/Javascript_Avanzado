import colors from "colors";
import fetch from "node-fetch";
const URI = "https://swapi.dev/api/people/";
const getMovieByPeople = async (id) => {
  const res = await fetch(URI + id);
  const { films, name } = await res.json();
  console.log("El personaje ", name.blue, "sale en las siguientes peliculas:");
  films.forEach(async (film) => {
    // film
    const peticion = await fetch(film);
    const { title } = await peticion.json();
    console.log(title.yellow);
  });
};
await getMovieByPeople(1);
await getMovieByPeople(2);
await getMovieByPeople(3);
await getMovieByPeople(4);
