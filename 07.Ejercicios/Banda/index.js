const request = require("request");
const colors = require("colors");
const URI = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=";
const getBanda = (name) => {
  let arreglo = name.split(" ");
  let name_n = arreglo.join("+");
  request.get(URI + name_n, (error, response, body) => {
    if (response.statusCode === 200) {
      const { artists } = JSON.parse(body);
      const artist = artists[0];
      const genre = artist.strGenre;
      console.log("El artista ", name.yellow, " es de genero ", genre.magenta);
    } else {
      console.log(response.statusCode, response.statusMessage);
      //EJEMPLO: 404 NOT FOUND
    }
  });
};
getBanda("michael jackson");
