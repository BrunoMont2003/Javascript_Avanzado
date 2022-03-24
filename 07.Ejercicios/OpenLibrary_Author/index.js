// Hacer una petición por autor y devolver la lista de sus libros
// http://openlibrary.org/search.json?author=asimov
const request = require("request");
const colors = require("colors");
const URI = "http://openlibrary.org/search.json?author=";
const getLibro = (autor) => {
  let arreglo = autor.split(" ");
  let autor_n = arreglo.join("+");

  request.get(URI + autor_n, (error, response, body) => {
    if (response.statusCode === 200) {
      const { docs } = JSON.parse(body);
      console.log("Los libro de " + autor.yellow + " son :");
      docs.forEach((libro) => {
        console.log(libro.title);
      });
    } else {
      console.log(response.statusCode, response.statusMessage);
    }
  });
};

getLibro("gabriel garcia");
